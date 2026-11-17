#!/usr/bin/env bash
# Regenerates the @obolnetwork/obol-sdk v3 reference (docs/sdk-v3) from an SDK
# checkout, type-checks every sample, and optionally builds a preview.
#
#   scripts/generate-sdk-v3-reference.sh <sdk-path> [options]
#
#   --with-proposed-tsdoc <patch>  apply a TSDoc patch to the copy first; every
#                                  page then says so in its banner (for review only)
#   --build                        production build of the current docs only
#                                  (docusaurus.sdk-v3-preview.config.js) into build-sdk-v3/
#   --no-check                     skip the sample type-check
#
# The SDK checkout is only read: it is copied (without node_modules, dist,
# temp, .git) to $SDK_V3_DOCS_SRC (default: a fresh mktemp directory), with
# node_modules symlinked to the checkout's own, and everything runs on the
# copy. The SDK must have its dependencies installed (typescript, esbuild and
# prettier come from it). GitHub links in the pages point at the checkout's
# HEAD commit when src/ and spec/ match it (else at $SDK_GITHUB_REF, default
# feat/sdk-v3-package).
set -euo pipefail

usage() { sed -n '2,20p' "$0" | sed 's/^# \{0,1\}//'; exit 2; }
[[ $# -ge 1 ]] || usage
SDK=$(cd "$1" && pwd); shift
PATCH="" BUILD=0 CHECK=1
while [[ $# -gt 0 ]]; do
  case "$1" in
    --with-proposed-tsdoc) PATCH=$(cd "$(dirname "$2")" && pwd)/$(basename "$2"); shift 2 ;;
    --build) BUILD=1; shift ;;
    --no-check) CHECK=0; shift ;;
    *) usage ;;
  esac
done

SITE=$(cd "$(dirname "$0")/.." && pwd)
[[ -f "$SDK/spec/operations.md" && -f "$SDK/src/index.ts" ]] || { echo "not an obol-sdk v3 checkout: $SDK" >&2; exit 2; }
[[ -d "$SDK/node_modules/typescript" ]] || { echo "install the SDK's dependencies first (yarn install in $SDK)" >&2; exit 2; }

MARKER=.sdk-v3-docs-copy
if [[ -n "${SDK_V3_DOCS_SRC:-}" ]]; then
  COPY=$SDK_V3_DOCS_SRC
  [[ "$(cd "$(dirname "$COPY")" && pwd)/$(basename "$COPY")" != "$SDK" ]] || { echo "SDK_V3_DOCS_SRC must not be the checkout itself" >&2; exit 2; }
  # Only ever delete a directory this script created.
  if [[ -e "$COPY" ]]; then
    if [[ -n "$(ls -A "$COPY")" && ! -f "$COPY/$MARKER" ]]; then
      echo "refusing to replace $COPY: not empty and not made by this script (no $MARKER)" >&2; exit 2
    fi
    rm -rf "$COPY"
  fi
  mkdir -p "$COPY"
else
  COPY=$(mktemp -d "${TMPDIR:-/tmp}/obol-sdk-v3-docs-src.XXXXXX")
fi
echo "[sdk-v3] copying $SDK -> $COPY"
touch "$COPY/$MARKER"
tar -C "$SDK" --exclude=./node_modules --exclude=./dist --exclude=./temp --exclude=./.git -cf - . | tar -C "$COPY" -xf -
ln -sfn "$SDK/node_modules" "$COPY/node_modules"

if [[ -z "${SDK_GITHUB_REF:-}" ]] && git -C "$SDK" rev-parse --verify -q HEAD >/dev/null \
  && git -C "$SDK" diff --quiet HEAD -- src spec README.md MIGRATION.md 2>/dev/null; then
  HEAD_SHA=$(git -C "$SDK" rev-parse HEAD)
  # Link to the commit only if GitHub has it (pushed to some branch).
  REMOTE_REFS=$(git ls-remote "${SDK_GITHUB_REPO:-https://github.com/ObolNetwork/obol-sdk.git}" 2>/dev/null || true)
  if grep -q "^$HEAD_SHA" <<<"$REMOTE_REFS"; then
    export SDK_GITHUB_REF=$HEAD_SHA
  else
    echo "[sdk-v3] HEAD $HEAD_SHA is not on GitHub; links use the branch name and may drift" >&2
  fi
fi
echo "[sdk-v3] GitHub links -> ${SDK_GITHUB_REF:-feat/sdk-v3-package}"

LABEL=()
if [[ -n "$PATCH" ]]; then
  echo "[sdk-v3] applying proposed TSDoc: $PATCH"
  patch -d "$COPY" -p1 --forward --no-backup-if-mismatch < "$PATCH"
  LABEL=(--label "Preview: generated with proposed TSDoc additions ($(basename "$PATCH")) applied to the SDK source; not in the SDK yet.")
fi

cd "$SITE"
node scripts/sdk-v3/generate.mjs --sdk "$COPY" "${LABEL[@]}"
if [[ $CHECK -eq 1 ]]; then
  node scripts/sdk-v3/check-samples.mjs --sdk "$COPY" || echo "[sdk-v3] some samples do not compile (see above)"
fi
if [[ $BUILD -eq 1 ]]; then
  yarn -s docusaurus build --config docusaurus.sdk-v3-preview.config.js --out-dir build-sdk-v3
  echo "[sdk-v3] serve with: yarn docusaurus serve --dir build-sdk-v3 --port 3100 --host 127.0.0.1  (open /sdk/v3)"
fi
