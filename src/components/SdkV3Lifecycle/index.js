import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

const KIND_LABEL = {
  tx: 'prepare',
  check: 'check',
  read: 'read',
  sign: 'sign',
  client: 'client',
};

/**
 * The SDK v3 lifecycle map: one card per stage with the operations that
 * belong to it, linked to the reference. `data` is the generated
 * docs/sdk-v3/_generated/lifecycle.json, so a rename in the SDK flows through
 * on the next generation.
 */
export default function SdkV3Lifecycle({data, offSdk = {}}) {
  const {pathname} = useLocation();
  const brokenLinks = useBrokenLinks();
  // Register the stage ids so links to /lifecycle#<stage> pass the anchor check.
  data.stages.forEach((stage) => brokenLinks.collectAnchor(stage.id));
  // Links in the data are relative to docs/sdk-v3/ (this page's folder).
  const base = pathname.slice(0, pathname.lastIndexOf('/') + 1);
  return (
    <ol className="sdk-flow">
      {data.stages.map((stage) => (
        <li key={stage.id} id={stage.id} className="sdk-flow__stage">
          <p className="sdk-flow__title">
            <span className="sdk-flow__n">{stage.n}</span>
            {stage.title}
          </p>
          <p className="sdk-flow__blurb">{stage.blurb}</p>
          {offSdk[stage.id] && (
            <p className="sdk-flow__offsdk">{offSdk[stage.id]}</p>
          )}
          <ul className="sdk-flow__methods">
            {stage.methods.map((m) => (
              <li key={m.href}>
                <span className={`sdk-flow__kind sdk-flow__kind--${m.kind}`}>
                  {KIND_LABEL[m.kind]}
                </span>
                <Link to={base + m.href}>{m.label}</Link>
                {m.warnings > 0 && (
                  <span
                    className="sdk-flow__warn"
                    title={`Can carry ${m.warnings} warning code(s) that send asks you to acknowledge`}>
                    ⚠ {m.warnings}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
