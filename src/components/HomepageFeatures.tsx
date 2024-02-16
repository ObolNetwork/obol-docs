/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  alt: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Generate Key Shares",
    image: "/img/noun_Key.png",
    alt: "Image copyright Turkkub, courtesy of the Noun Project",
    description: (
      <>
        The <Link to="/docs/dvl/intro">Distributed Validator Launchpad</Link> is
        an interface to enable distributed key generation for Distributed
        Validators.
      </>
    ),
    link: "/docs/dvl/intro",
  },
  {
    title: "Deploy Distributed Validators",
    image: "/img/CharonLogo.svg",
    alt: "Charon Distributed Validator Client Logomark",
    description: (
      <>
        <Link to="/docs/charon/intro">Charon</Link> is a Distributed Validator
        Client for running Ethereum validators in a fault tolerant manner.
      </>
    ),
    link: "/docs/charon/intro",
  },
  {
    title: "Build on the Obol Network",
    image: "/img/noun_ethereum.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        <Link to="/docs/sc/introducing-obol-splits">Obol Splits</Link> are smart
        contracts for the distribution of rewards from Distributed Validators.
      </>
    ),
    link: "/docs/sc/introducing-obol-splits",
  },
  {
    title: "Take part in Beta",
    image: "/img/noun_laboratory.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        You can run one Distributed Validator on mainnet as part of Obol's{" "}
        <Link to="https://blog.obol.tech/mainnet-open-beta-launch-blog/">Open Beta.</Link>
      </>
    ),
    link: "/docs/start/quickstart_overview",
  },
];

function Feature({ title, image, description, alt, link }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <Link to={link}>
        <div className="text--center">
          <img className={styles.featureImg} alt={alt} src={image} />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{ textDecoration: "none" }}>
          <div className="text--center--title">
            <h3>{title}</h3>
          </div>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
