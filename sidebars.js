/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      "type": "category",
      "label": "Introduction",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "int/obol_overview"
        },
        {
          "type": "doc",
          "id": "int/key-concepts"
        }
      ]
    },
    {
      "type": "category",
      "label": "Getting started",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "start/quickstart_overview"
        },
        {
          "type": "doc",
          "id": "start/quickstart_group"
        },
        {
          "type": "doc",
          "id": "start/quickstart_alone"
        },
        {
          "type": "doc",
          "id": "start/activate-dv"
        },
        {
          "type": "doc",
          "id": "start/update"
        },
        {
          "type": "doc",
          "id": "start/quickstart-exit"
        }
      ]
    },
    {
      "type": "category",
      "label": "Advanced Guides",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "advanced/quickstart-sdk"
        },
        {
          "type": "doc",
          "id": "advanced/quickstart-builder-api"
        },
        {
          "type": "doc",
          "id": "advanced/quickstart-split"
        },
        {
          "type": "doc",
          "id": "advanced/monitoring"
        },
        {
          "type": "doc",
          "id": "advanced/obol-monitoring"
        },
        {
          "type": "doc",
          "id": "advanced/self-relay"
        },
        {
          "type": "doc",
          "id": "advanced/adv-docker-configs"
        },
        {
          "type": "doc",
          "id": "advanced/quickstart-combine"
        }
      ]
    },
    {
      "type": "category",
      "label": "FAQ",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "faq/general"
        },
        {
          "type": "doc",
          "id": "faq/errors"
        },
        {
          "type": "doc",
          "id": "faq/risks"
        },
        {
          "type": "doc",
          "id": "faq/dkg_failure"
        }
      ]
    },
    {
      "type": "category",
      "label": "Charon",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "charon/intro"
        },
        {
          "type": "doc",
          "id": "charon/dkg"
        },
        {
          "type": "doc",
          "id": "charon/cluster-configuration"
        },
        {
          "type": "doc",
          "id": "charon/networking"
        },
        {
          "type": "doc",
          "id": "charon/charon-cli-reference"
        }
      ]
    },
    {
      "type": "doc",
      "id": "dvl_intro"
    },
    {
      "type": "doc",
      "id": "sc_obol-splits"
    },
    {
      "type": "category",
      "label": "Security",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sec/overview"
        },
        {
          "type": "doc",
          "id": "sec/bug-bounty"
        },
        {
          "type": "doc",
          "id": "sec/contact"
        },
        {
          "type": "doc",
          "id": "sec/ev-assessment"
        },
        {
          "type": "doc",
          "id": "sec/smart_contract_audit"
        },
        {
          "type": "doc",
          "id": "sec/threat_model"
        }
      ]
    },
    {
      "type": "category",
      "label": "Contribution & Feedback",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "cf/bug-report"
        },
        {
          "type": "doc",
          "id": "cf/docs"
        },
        {
          "type": "doc",
          "id": "cf/feedback"
        }
      ]
    },
    {
      "type": "category",
      "label": "Further reading",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "fr/eth"
        },
        {
          "type": "doc",
          "id": "fr/ethereum_and_dvt"
        },
        {
          "type": "doc",
          "id": "fr/testnet"
        }
      ]
    },
  ],
  apiSidebar: [
    {
      "type": "doc",
      "id": "sdk/index",
      "label": "Intro",
    },
    {
      "type": "category",
      "label": "Enumerations",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/enumerations/FORK_MAPPING",
        },
      ],
    },
    {
      "type": "category",
      "label": "Classes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/classes/Client",
        },
      ],
    },
    {
      "type": "category",
      "label": "Interfaces",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/interfaces/ClusterDefintion",
        },
      ],
    },
    {
      "type": "category",
      "label": "Type-Aliases",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/type-aliases/BuilderRegistration",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/BuilderRegistrationMessage",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/ClusterCreator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/ClusterOperator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/ClusterValidator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/DepositData",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/DistributedValidator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/OperatorPayload",
        },
      ],
    },
  ], 
  
  // Add custom sidebar for "api" folder

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
