// Reads the public surface of the SDK with the TypeScript compiler API (the
// SDK's own pinned `typescript`), so signatures and docs are exactly what
// the source declares. Nothing here writes to the SDK checkout.
import { createRequire } from 'node:module';
import path from 'node:path';

const FLAGS_NAMES = [
  'NoTruncation',
  'UseAliasDefinedOutsideCurrentScope',
  'WriteArrowStyleSignature',
];

export function loadSource(sdkDir, entries) {
  const require = createRequire(path.join(sdkDir, 'package.json'));
  const ts = require('typescript');
  const cfgPath = path.join(sdkDir, 'tsconfig.json');
  const parsed = ts.getParsedCommandLineOfConfigFile(cfgPath, {}, {
    ...ts.sys,
    onUnRecoverableConfigFileDiagnostic: d => {
      throw new Error(ts.flattenDiagnosticMessageText(d.messageText, '\n'));
    },
  });
  const rootNames = entries.map(e => path.join(sdkDir, e));
  const program = ts.createProgram({ rootNames, options: { ...parsed.options, noEmit: true } });
  const checker = program.getTypeChecker();
  const typeFlags = FLAGS_NAMES.reduce((a, n) => a | ts.TypeFormatFlags[n], 0);
  const srcDir = path.join(sdkDir, 'src') + path.sep;
  const printer = ts.createPrinter({ removeComments: true, newLine: ts.NewLineKind.LineFeed });

  const resolve = sym => (sym.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(sym) : sym);
  const declOf = sym => sym.valueDeclaration ?? sym.declarations?.[0];
  const inSdk = node => !!node && node.getSourceFile().fileName.startsWith(srcDir);
  const relFile = node => path.relative(sdkDir, node.getSourceFile().fileName);
  const lineOf = node => node.getSourceFile().getLineAndCharacterOfPosition(node.getStart()).line + 1;

  /** Doc comment text and tags of a symbol. */
  function docs(sym) {
    if (!sym) return { text: '', tags: [] };
    const text = ts.displayPartsToString(sym.getDocumentationComment(checker)).trim();
    const tags = sym.getJsDocTags(checker).map(t => ({
      name: t.name,
      text: ts.displayPartsToString(t.text ?? []).trim(),
    }));
    return { text, tags };
  }

  const typeStr = (type, node) => checker.typeToString(type, node, typeFlags);

  /** Call signatures of a symbol's type, as plain data. */
  function signaturesOf(sym, node) {
    const type = checker.getTypeOfSymbolAtLocation(sym, node);
    return type.getCallSignatures().map(sig => describeSignature(sig, node));
  }

  function describeSignature(sig, node) {
    const params = sig.getParameters().map(p => {
      const pDecl = declOf(p);
      const pType = checker.getTypeOfSymbolAtLocation(p, pDecl ?? node);
      const optional =
        !!(pDecl && (pDecl.questionToken || pDecl.initializer)) ||
        !!(p.flags & ts.SymbolFlags.Optional);
      const rest = !!pDecl?.dotDotDotToken;
      return {
        name: p.getName(),
        optional,
        rest,
        // As written in the source when there is a type node, else checker text.
        type: pDecl?.type && inSdk(pDecl) ? pDecl.type.getText() : typeStr(pType, node),
        doc: docs(p).text,
        fields: objectFields(pType, pDecl ?? node),
      };
    });
    const ret = sig.getReturnType();
    const decl = sig.getDeclaration();
    const typeParams = (sig.getTypeParameters() ?? []).map(tp => {
      const d = declOf(tp.symbol);
      return d ? d.getText() : tp.symbol.getName();
    });
    return {
      text: checker.signatureToString(sig, node, typeFlags),
      typeParams,
      params,
      returns: decl?.type && inSdk(decl) ? decl.type.getText() : typeStr(ret, node),
      doc: ts.displayPartsToString(sig.getDocumentationComment(checker)).trim(),
      tags: sig.getJsDocTags().map(t => ({ name: t.name, text: ts.displayPartsToString(t.text ?? []).trim() })),
    };
  }

  /**
   * The fields of an SDK-declared object parameter (one level), including
   * inherited ones; null for primitives, arrays, functions, foreign types and
   * unions that are not all objects.
   */
  function objectFields(type, node) {
    if (!type) return null;
    let t = type;
    if (t.isUnion()) {
      const nonUndef = t.types.filter(x => !(x.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
      if (nonUndef.length !== 1) return null;
      t = nonUndef[0];
    }
    if (!(t.flags & ts.TypeFlags.Object)) return null;
    if (checker.isArrayType(t) || checker.isTupleType(t)) return null;
    if (t.getCallSignatures().length) return null;
    const sym = t.aliasSymbol ?? t.getSymbol();
    const d = sym && declOf(sym);
    if (d && !inSdk(d) && sym.getName() !== '__type' && sym.getName() !== '__object') return null;
    const props = checker.getPropertiesOfType(t);
    if (!props.length || props.length > 40) return null;
    return props.map(p => fieldOf(p, node));
  }

  function fieldOf(p, node) {
    const pDecl = declOf(p);
    const pType = checker.getTypeOfSymbolAtLocation(p, pDecl ?? node);
    let type;
    if (pDecl?.type && inSdk(pDecl)) type = pDecl.type.getText();
    else type = typeStr(pType, node);
    if (pDecl?.questionToken && type.endsWith(' | undefined')) type = type.slice(0, -12);
    return {
      name: p.getName(),
      optional: !!(p.flags & ts.SymbolFlags.Optional),
      readonly: !!(pDecl && ts.getCombinedModifierFlags(pDecl) & ts.ModifierFlags.Readonly),
      type,
      doc: docs(p).text,
      tags: docs(p).tags,
      declaredIn: pDecl?.parent && ts.isInterfaceDeclaration(pDecl.parent) ? pDecl.parent.name.text : null,
    };
  }

  /** Classify and describe one exported symbol. */
  function describe(name, rawSym) {
    const sym = resolve(rawSym);
    const decl = declOf(sym);
    if (!decl) return { name, kind: 'unknown' };
    const base = {
      name,
      doc: docs(sym),
      file: relFile(decl),
      line: lineOf(decl),
    };
    if (ts.isSourceFile(decl) || ts.isModuleDeclaration(decl)) {
      return { ...base, kind: 'namespace', symbol: sym };
    }
    if (ts.isInterfaceDeclaration(decl) || ts.isTypeAliasDeclaration(decl)) {
      const type = checker.getDeclaredTypeOfSymbol(sym);
      let fields = null;
      if (ts.isInterfaceDeclaration(decl) || (ts.isTypeAliasDeclaration(decl) && ts.isTypeLiteralNode(decl.type))) {
        fields = checker.getPropertiesOfType(type).map(p => fieldOf(p, decl));
      }
      return {
        ...base,
        kind: ts.isInterfaceDeclaration(decl) ? 'interface' : 'type',
        declaration: printer.printNode(ts.EmitHint.Unspecified, stripExport(decl), decl.getSourceFile()),
        fields,
        heritage: ts.isInterfaceDeclaration(decl)
          ? (decl.heritageClauses ?? []).flatMap(h => h.types.map(t => t.getText()))
          : [],
      };
    }
    if (ts.isClassDeclaration(decl)) {
      const inst = checker.getDeclaredTypeOfSymbol(sym);
      const fields = checker
        .getPropertiesOfType(inst)
        .filter(p => !(p.getName().startsWith('#')))
        .map(p => fieldOf(p, decl));
      return { ...base, kind: 'class', fields, declaration: null };
    }
    const sigs = signaturesOf(sym, decl);
    if (sigs.length) return { ...base, kind: 'function', signatures: sigs };
    // A constant: show its declared type (or the initializer for literals).
    const type = checker.getTypeOfSymbolAtLocation(sym, decl);
    let typeText = decl.type ? decl.type.getText() : typeStr(type, decl);
    return { ...base, kind: 'constant', type: typeText };
  }

  function stripExport(decl) {
    const mods = (decl.modifiers ?? []).filter(m => m.kind !== ts.SyntaxKind.ExportKeyword && m.kind !== ts.SyntaxKind.DeclareKeyword);
    if (ts.isInterfaceDeclaration(decl)) {
      return ts.factory.updateInterfaceDeclaration(decl, mods, decl.name, decl.typeParameters, decl.heritageClauses, decl.members);
    }
    return ts.factory.updateTypeAliasDeclaration(decl, mods, decl.name, decl.typeParameters, decl.type);
  }

  /** Exports of a module (entry file or namespace symbol), described. */
  function exportsOf(target) {
    const modSym = typeof target === 'string' ? checker.getSymbolAtLocation(program.getSourceFile(path.join(sdkDir, target))) : target;
    const out = new Map();
    for (const s of checker.getExportsOfModule(modSym)) out.set(s.getName(), describe(s.getName(), s));
    return out;
  }

  /** Members of a bound `XModule` interface, as methods / constants. */
  function moduleMembers(ifaceSym) {
    const sym = resolve(ifaceSym);
    const decl = declOf(sym);
    const type = checker.getDeclaredTypeOfSymbol(sym);
    return checker.getPropertiesOfType(type).map(p => {
      const pDecl = declOf(p);
      const pType = checker.getTypeOfSymbolAtLocation(p, pDecl);
      const sigs = pType.getCallSignatures().map(s => describeSignature(s, pDecl));
      // `foo: typeof foo` members: the docs live on the function.
      let typeofTarget = null;
      if (pDecl.type && ts.isTypeQueryNode(pDecl.type)) {
        const target = checker.getSymbolAtLocation(pDecl.type.exprName);
        if (target) typeofTarget = docs(resolve(target));
      }
      return {
        name: p.getName(),
        doc: docs(p),
        typeofDoc: typeofTarget,
        typeNode: pDecl.type ? pDecl.type.getText() : typeStr(pType, decl),
        kind: sigs.length ? 'function' : 'constant',
        signatures: sigs,
        file: relFile(pDecl),
        line: lineOf(pDecl),
        objectMember: pType.getProperties().length > 0 && !sigs.length,
      };
    });
  }

  /** Property names → TSDoc of an object literal constant (FINDINGS). */
  function constantKeyDocs(file, constName) {
    const sf = program.getSourceFile(path.join(sdkDir, file));
    const out = {};
    const visit = node => {
      if (ts.isVariableDeclaration(node) && node.name.getText() === constName && node.initializer) {
        let init = node.initializer;
        while (ts.isAsExpression(init) || ts.isSatisfiesExpression?.(init) || ts.isParenthesizedExpression(init)) init = init.expression;
        if (ts.isObjectLiteralExpression(init)) {
          for (const prop of init.properties) {
            const s = checker.getSymbolAtLocation(prop.name);
            out[prop.name.getText()] = docs(s).text;
          }
        }
      }
      ts.forEachChild(node, visit);
    };
    visit(sf);
    return out;
  }

  return { ts, program, checker, exportsOf, moduleMembers, describe, resolve, constantKeyDocs };
}
