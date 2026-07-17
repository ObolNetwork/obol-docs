import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface ApiEndpointProps {
  /** HTTP method, lowercase: get | post | put | delete | patch */
  method: string;
  /** Path template, e.g. /v1/definition/{configHash} */
  path: string;
  /** Short human summary from the OpenAPI spec */
  summary?: string;
  /** Deep link into the rendered API reference */
  href: string;
  deprecated?: boolean;
}

/**
 * A compact endpoint card that deep-links into the Redoc-rendered
 * API reference at /api/. Generated from GitBook {% openapi %} blocks.
 */
export default function ApiEndpoint({
  method,
  path,
  summary,
  href,
  deprecated,
}: ApiEndpointProps): React.ReactElement {
  // Docusaurus <Link> auto-prefixes baseUrl for absolute internal paths.
  return (
    <Link className={styles.endpoint} to={href}>
      <span
        className={styles.method}
        data-method={method.toLowerCase()}
        aria-label={`HTTP ${method.toUpperCase()}`}
      >
        {method.toUpperCase()}
      </span>
      <span className={styles.path}>
        <code>{path}</code>
        {deprecated && <span className={styles.deprecated}>deprecated</span>}
      </span>
      {summary && <span className={styles.summary}>{summary}</span>}
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
