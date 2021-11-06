/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Generate Sharded Keys',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <code>delphi</code> is a CLI tool to enable distributed key generation for Ethereum validators. 
      </>
    ),
  },
  {
    title: 'Deploy Distributed Validators',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <code>charon</code> is a HTTP middleware for running Ethereum validators in a redundant manner.
      </>
    ),
  },
  {
    title: 'Build on the Obol Network',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        <code>apollo</code> is a suite of smart contracts for coordinating the creation and destruction of Ethereum validators. 
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
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
