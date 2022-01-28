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
        The <Link to="/docs/dvk/distributed-validator-keys">DV Launchpad</Link>
        is a site to enable distributed key generation for Distributed
        Validators.
      </>
    ),
    link: "/docs/dvk/distributed-validator-keys",
  },
  {
    title: "Deploy Distributed Validators",
    image: "/img/noun_FourCircles.png",
    alt: "Image copyright Zach Bogart, courtesy of the Noun Project",
    description: (
      <>
        <Link to="/docs/dv/introducing-charon">Charon</Link> is a Distributed
        Validator Client for running Ethereum validators in a redundant manner.
      </>
    ),
    link: "/docs/dv/introducing-charon",
  },
  {
    title: "Build on the Obol Network",
    image: "/img/noun_ethereum.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        <Link to="/docs/sc/introducing-obol-managers">Obol Managers</Link> are
        smart contracts for the coordination of Distributed Validators.
      </>
    ),
    link: "/docs/sc/introducing-obol-managers",
  },
];

function Feature({ title, image, description, alt, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link}>
        <div className="text--center">
          <img className={styles.featureImg} alt={alt} src={image} />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{ textDecoration: "none", color: "#FFF" }}>
          <h3>{title}</h3>
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
