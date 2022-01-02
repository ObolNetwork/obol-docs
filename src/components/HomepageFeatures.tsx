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
};

const FeatureList: FeatureItem[] = [
  {
    title: "Generate Key Shares",
    image: "/img/noun_Key.png",
    alt: "Image copyright Turkkub, courtesy of the Noun Project",
    description: (
      <>
        The <Link to="/docs/dvk/distributed-validator-keys">DV Launchpad</Link> is a site to enable distributed key generation
        for Distributed Validators.
      </>
    ),
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
  },
  {
    title: "Build on the Obol Network",
    image: "/img/noun_ethereum.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        <Link to="/docs/sc/introducing-obol-managers">Obol Managers</Link> are smart contracts for the coordination of Distributed Validators.
      </>
    ),
  },
];

function Feature({ title, image, description, alt }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureImg} alt={alt} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
