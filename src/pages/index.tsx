import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig
  const metadatas = Array(themeConfig.metadatas)
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* Opt for SVG Obol title image rather than a text field */}
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <img
          className={styles.heroLogo}
          alt={"Obol Network"}
          src={"/img/ObolHorizontalDarkBG.svg"}
        />
        {metadatas.map((metadata, i) => (
          <meta key={`metadata_${i}`} {...metadata} />
        ))}
        <div className={styles.obolDots}>
          <div className={styles.obolDot1}></div>
          <div className={styles.obolDot2}></div>
          <div className={styles.obolDot3}></div>
          <div className={styles.obolDot4}></div>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.button + " button button--secondary button--lg"}
            to="/docs/intro"
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
