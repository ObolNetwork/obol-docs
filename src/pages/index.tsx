import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const paths = [
  {
    title: 'Learn',
    glyph: '◍',
    description:
      'What Distributed Validator Technology is, how Charon coordinates a cluster, and why DVs are the staking endgame.',
    to: '/learn/readme/learn-about-obol',
    links: [
      {label: 'Key staking concepts', to: '/learn/readme/key-concepts'},
      {label: 'Introduction to Charon', to: '/learn/charon/intro'},
      {label: 'Distributed Key Generation', to: '/learn/charon/dkg'},
    ],
  },
  {
    title: 'Run a DV',
    glyph: '⬢',
    description:
      'Create, activate, and operate a Distributed Validator — alone or with a group — on mainnet or Hoodi.',
    to: '/run-a-dv/start/quickstart_overview',
    links: [
      {label: 'Create a DV with a group', to: '/run-a-dv/start/create-a-dv-with-a-group'},
      {label: 'Deployment best practices', to: '/run-a-dv/prepare/deployment-best-practices'},
      {label: 'Monitoring your node', to: '/run-a-dv/running/monitoring'},
    ],
  },
  {
    title: 'Obol Stack',
    glyph: '⌘',
    description:
      'An agent-operated harness for blockchain infrastructure: run networks, expose services, get paid over x402.',
    to: '/obol-stack/obol-stack',
    links: [
      {label: 'Quickstart', to: '/obol-stack/quickstart'},
      {label: 'Build a profitable stack', to: '/obol-stack/build-a-profitable-stack'},
      {label: 'Selling agent services', to: '/obol-stack/selling-services'},
    ],
  },
  {
    title: 'Build',
    glyph: '{}',
    description:
      'Integrate DVs programmatically with the TypeScript SDK, the REST API, and the Charon CLI.',
    to: '/sdk/index',
    links: [
      {label: 'API reference', to: '/api/'},
      {label: 'Charon CLI reference', to: '/learn/charon/charon-cli-reference'},
      {label: 'Create a DV with the SDK', to: '/advanced-and-troubleshooting/advanced/create-a-dv-using-the-sdk'},
    ],
  },
];

const guides = [
  {label: 'Quickstart overview', to: '/run-a-dv/start/quickstart_overview'},
  {label: 'Create a Lido CSM DV', to: '/run-a-dv/integrations/lido-csm'},
  {label: 'Create an EigenLayer DV', to: '/run-a-dv/integrations/create-an-eigenlayer-dv'},
  {label: 'Migrate an existing validator', to: '/advanced-and-troubleshooting/advanced/quickstart-split'},
  {label: 'Test a cluster', to: '/run-a-dv/prepare/test-a-cluster'},
  {label: 'Exit a DV', to: '/run-a-dv/running/exit-a-dv'},
  {label: 'Errors & resolutions', to: '/advanced-and-troubleshooting/troubleshooting/errors'},
  {label: 'Claim rewards', to: '/run-a-dv/running/claim-rewards'},
  {label: 'Handling DKG failure', to: '/advanced-and-troubleshooting/troubleshooting/dkg_failure'},
];

const terminalLines = [
  {prompt: true, text: 'docker run obolnetwork/charon:v1.10.0 create enr'},
  {prompt: false, text: 'Created ENR private key: .charon/charon-enr-private-key'},
  {prompt: false, text: 'enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83…', dim: true},
  {prompt: true, text: 'charon dkg --definition-file cluster-definition.json'},
  {prompt: false, text: '✓ 4/4 operators connected', mint: true},
  {prompt: false, text: '✓ distributed key generation complete', mint: true},
  {prompt: false, text: '✓ cluster-lock.json written — your DV is ready', mint: true},
];

function ClusterMotif() {
  // A 4-node distributed validator cluster, drawn as a quiet constellation.
  const nodes = [
    {cx: 60, cy: 40},
    {cx: 240, cy: 26},
    {cx: 210, cy: 170},
    {cx: 34, cy: 150},
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ];
  return (
    <svg
      className={styles.motif}
      viewBox="0 0 270 200"
      aria-hidden="true"
      focusable="false">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          className={styles.motifEdge}
          style={{animationDelay: `${i * 0.7}s`}}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r="14"
            className={styles.motifHalo}
            style={{animationDelay: `${i * 0.9}s`}}
          />
          <circle cx={n.cx} cy={n.cy} r="5" className={styles.motifNode} />
        </g>
      ))}
    </svg>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout description="Documentation for the Obol Collective: run resilient Ethereum validators with Distributed Validator Technology, and operate decentralized infrastructure with the Obol Stack.">
      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Obol Collective · Documentation</p>
              <h1 className={styles.title}>
                Validators with <span className={styles.accent}>no single</span>{' '}
                point of failure.
              </h1>
              <p className={styles.subtitle}>
                Obol Distributed Validators split one Ethereum validator across
                a fault-tolerant cluster of nodes. Learn the technology, run a
                DV in production, or build on the SDK, API, and the
                agent-operated Obol Stack.
              </p>
              <div className={styles.ctas}>
                <Link
                  className={clsx('button button--lg', styles.ctaPrimary)}
                  to="/run-a-dv/start/quickstart_overview">
                  Run a DV
                </Link>
                <Link
                  className={clsx('button button--lg', styles.ctaGhost)}
                  to="/learn/readme/learn-about-obol">
                  Learn about Obol
                </Link>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <ClusterMotif />
              <div className={styles.terminal}>
                <div className={styles.terminalBar}>
                  <span />
                  <span />
                  <span />
                  <em>obol@cluster:~</em>
                </div>
                <div className={styles.terminalBody}>
                  {terminalLines.map((l, i) => (
                    <div
                      key={i}
                      className={clsx(
                        styles.terminalLine,
                        l.mint && styles.terminalMint,
                        l.dim && styles.terminalDim,
                      )}
                      style={{animationDelay: `${0.35 + i * 0.45}s`}}>
                      {l.prompt && <span className={styles.prompt}>$ </span>}
                      {l.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.paths}>
          <div className="container">
            <div className={styles.pathGrid}>
              {paths.map((p, i) => (
                <div
                  key={p.title}
                  className={styles.pathCard}
                  style={{animationDelay: `${0.1 + i * 0.08}s`}}>
                  <Link to={p.to} className={styles.pathHead}>
                    <span className={styles.glyph}>{p.glyph}</span>
                    <h2>{p.title}</h2>
                    <span className={styles.pathArrow}>→</span>
                  </Link>
                  <p>{p.description}</p>
                  <ul>
                    {p.links.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.guides}>
          <div className="container">
            <div className={styles.guidesHead}>
              <h2>Popular guides</h2>
              <p>The pages operators reach for most.</p>
            </div>
            <div className={styles.guideGrid}>
              {guides.map((g) => (
                <Link key={g.to} to={g.to} className={styles.guideLink}>
                  {g.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.agents}>
          <div className="container">
            <div className={styles.agentsCard}>
              <div>
                <h2>Reading these docs with an AI agent?</h2>
                <p>
                  Every page is served as raw markdown at its URL plus{' '}
                  <code>.md</code>. Point your agent at{' '}
                  <Link to="pathname:///llms.txt">
                    <code>/llms.txt</code>
                  </Link>{' '}
                  for an index, or{' '}
                  <Link to="pathname:///llms-full.txt">
                    <code>/llms-full.txt</code>
                  </Link>{' '}
                  for the whole corpus in one file. The wider map of Obol
                  repos, skills, and specs lives at{' '}
                  <a href="https://obol.org/llms.txt">obol.org/llms.txt</a>.
                </p>
              </div>
              <pre className={styles.agentsSnippet}>
                <code>
                  {'curl https://docs.obol.org/llms.txt\n'}
                  {'curl https://docs.obol.org/learn/charon/intro.md'}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
