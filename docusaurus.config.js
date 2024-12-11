// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github
const darkCodeTheme = themes.palenight

// Override code blocks to be Obol coloured
const customObolDarkTheme = {
  ...darkCodeTheme,
  plain: { color: "#bfc7d5", backgroundColor: "#243D42" },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Obol Network",
  tagline: "Building Distributed Validators for Ethereum",
  url: "https://docs.obol.org/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ObolNetwork", // Usually your GitHub org/user name.
  projectName: "obol-docs", // Usually your repo name.
  trailingSlash: false,
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ], 
    [
     '@docusaurus/plugin-client-redirects',
     {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
         // /docs/oldDoc -> /docs/newDoc
          {
          to: '/learn/intro/obol-collective',
          from: '/docs/int/Overview',
          },
          {
            to: '/learn/intro/key-concepts',
            from: '/docs/int/key-concepts',
          },
          {
            to: '/run/prepare/how_where_DVs',
            from: '/docs/int/how_where_DVs',
          },
          {
            to: '/run/start/quickstart_overview',
            from: '/docs/start/quickstart_overview',
          },
          {
            to: '/run/start/quickstart_alone',
            from: '/docs/start/quickstart_alone',
          },
          {
            to: '/run/start/quickstart_group',
            from: '/docs/start/quickstart_group',
          },
          {
            to: '/run/running/activate-dv',
            from: '/docs/start/activate-dv',
          },
          {
            to: '/run/running/update',
            from: '/docs/start/update',
          },
          {
            to: '/run/running/quickstart-exit',
            from: '/docs/start/quickstart-exit',
          },
          {
            to: '/run/start/quickstart-builder-api',
            from: '/docs/advanced/quickstart-builder-api',
          },
          {
            to: '/run/running/monitoring',
            from: '/docs/advanced/monitoring',
          },
          {
            to: '/run/start/obol-monitoring',
            from: '/docs/advanced/obol-monitoring',
          },
          {
            to: '/adv/advanced/quickstart-sdk',
            from: '/docs/advanced/quickstart-sdk',
          },
          {
            to: '/run/integrations/quickstart-eigenpod',
            from: '/docs/advanced/quickstart-eigenpod',
          },
          {
            to: '/run/prepare/test-command',
            from: '/docs/advanced/test-command',
          },
          {
            to: '/adv/advanced/quickstart-split',
            from: '/docs/advanced/quickstart-split',
          },
          {
            to: '/adv/advanced/quickstart-combine',
            from: '/docs/advanced/quickstart-combine',
          },
          {
            to: '/adv/advanced/self-relay',
            from: '/docs/advanced/self-relay',
          },
          {
            to: '/run/prepare/deployment-best-practices',
            from: '/docs/advanced/deployment-best-practices',
          },
          {
            to: '/adv/advanced/adv-docker-configs',
            from: '/docs/advanced/adv-docker-configs',
          },
          {
            to: '/learn/intro/faq',
            from: '/docs/faq/general',
          },
          {
            to: '/adv/troubleshooting/errors',
            from: '/docs/faq/errors',
          },
          {
            to: '/adv/security/risks',
            from: '/docs/faq/risks',
          },
          {
            to: '/adv/troubleshooting/dkg_failure',
            from: '/docs/faq/dkg_failure',
          },
          {
            to: '/adv/troubleshooting/client_configurations',
            from: '/docs/faq/client_configurations',
          },
          {
            to: '/gov/governance/contributions',
            from: '/docs/faq/contributions',
          },
          {
            to: '/learn/futher-reading/peer_score',
            from: '/docs/faq/peer_score',
          },
          {
            to: '/learn/charon/intro',
            from: '/docs/charon/intro',
          },
          {
            to: '/learn/charon/dkg',
            from: '/docs/charon/dkg',
          },
          {
            to: '/learn/charon/cluster-configuration',
            from: '/docs/charon/cluster-configuration',
          },
          {
            to: '/learn/charon/networking',
            from: '/docs/charon/networking',
          },
          {
            to: '/learn/charon/charon-cli-reference',
            from: '/docs/charon/charon-cli-reference',
          },
          {
            to: '/learn/intro/launchpad',
            from: '/docs/dvl/intro',
          },
          {
            to: '/learn/intro/obol-splits',
            from: '/docs/sc/introducing-obol-splits',
          },
          {
            to: '/adv/security/overview',
            from: '/docs/sec/overview',
          },
          {
            to: '/adv/security/bug-bounty',
            from: '/docs/sec/bug-bounty',
          },
          {
            to: '/adv/security/contact',
            from: '/docs/sec/contact',
          },
          {
            to: '/adv/security/ev-assessment',
            from: '/docs/sec/ev-assessment',
          },
          {
            to: '/adv/security/smart_contract_audit',
            from: '/docs/sec/smart_contract_audit',
          },
          {
            to: '/adv/security/threat_model',
            from: '/docs/sec/threat_model',
          },
          {
            to: '/gov/contribution/bug-report',
            from: '/docs/cf/bug-report',
          },
          {
            to: '/gov/contribution/docs',
            from: '/docs/cf/docs',
          },
          {
            to: '/gov/contribution/feedback',
            from: '/docs/cf/feedback',
          },
          {
            to: '/learn/futher-reading/ethereum_and_dvt',
            from: '/docs/fr/ethereum_and_dvt',
          },
          {
            to: '/learn/futher-reading/testnet',
            from: '/docs/fr/testnet',
          },
          {
            to: '/learn/futher-reading/resources',
            from: '/docs/fr/resources',
          },
          {
            to: '/run/integrations/lido-csm',
            from: '/docs/advanced/lido-csm',
          },
          {
            to: '/run/integrations/Dappnode',
            from: '/docs/faq/Dappnode',
          },
          {
            to: '/sdk',
            from: '/docs/sdk',
          },
          //Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
       ],
        // createRedirects(existingPath) {
        //   if (existingPath.includes('/learn/intro/obol-collective')) {
        //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //     return [
        //       existingPath.replace('/learn/intro/obol-collective', '/docs/int/Overview'),
        //       //existingPath.replace('/community', '/docs/support'),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
     },
   ],
    // [
    //   "docusaurus-plugin-typedoc",

    //   // Plugin / TypeDoc options
    //   {
    //     entryPoints: ["../src/index.ts"],
    //     tsconfig: "../tsconfig.json",
    //     out: "docs/sdk",
    //     mergeReadme: true,
    //     parametersFormat: "table",
    //     propertiesFormat: "table",
    //     enumMembersFormat: "table",
    //     typeDeclarationFormat: "table",
    //     hidePageTitle: true,
    //     excludeNotDocumented:true,
    //     sort: "source-order",
    //     skipErrorChecking:true
    //   },
    // ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          "routeBasePath": '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ObolNetwork/obol-docs/edit/main/",
        },
        blog: false,
        debug: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-DTT2S469C4',
          anonymizeIP: true,
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec:"https://api.obol.tech/docs-json",
            route: '/api/',
            layout: {
              title: "API Reference",
              description:
                "An API for preparing Distributed Validator Key Generation Ceremonies built by Obol Labs.",
              keywords: [
                "Distributed Validators",
                "Ethereum",
                "DVT",
                "Obol",
                "API",
              ],
            },
          },
        ],

        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          // primaryColor: '#16968E',
          // primaryColorDark: '#16968E',
          theme: {
            colors: {
              http: {
                get: "#16968e",
                put: "#9167e4",
                post: "#b6ea5c",
                delete: "#dd603c",
              },
            },
            // sidebar: {
            //   backgroundColor: '#00ff00'
            // },
            rightPanel: {
              backgroundColor: "#243D42",
            },
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Obol Network",
        logo: {
          alt: "Obol Network Logo",
          src: "/img/ObolIconDark.svg",
          srcDark: "/img/ObolIconLight.svg",
        },
        items: [
          {
            type: "doc",
            docId: "learn/intro/obol-collective",
            position: "left",
            label: "Docs",
          },
          {
            to: "api",
            position: "left",
            label: "API",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            label: "SDK",
            position: "left",
          },
          { to: "https://blog.obol.tech", label: "Blog", position: "left" },
          {
            href: "https://github.com/obolnetwork/obol-docs",
            label: "GitHub",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Obol Network Logo",
          src: "/img/ObolLineWhite.svg",
          srcDark: "/img/ObolLineWhite.svg",
          width: "30px",
          height: "30px",
          href: "https://obol.org/",
        },
        links: [
          {
            title: "Discover",
            items: [
              {
                label: "Github",
                to: "https://github.com/ObolNetwork",
              },
              {
                label: "Status",
                to: "https://status.obol.org",
              },
              {
                label: "DV Launchpad",
                to: "/learn/intro/launchpad",
              },
              {
                label: "Useful Links",
                to: "/learn/futher-reading/resources",
              },
            ],
          },
          {
            title: "Obol Collective",
            items: [
              {
                label: "Obol.org",
                to: "https://obol.org",
              },
              {
                label: "Discord",
                to: "https://discord.gg/obol",
              },
              {
                label: "Twitter",
                to: "https://x.com/Obol_Collective",
              },
              {
                label: "Blog",
                to: "https://blog.obol.org",
              },
            ],
          },
          {
            title: "DV Labs",
            items: [
              {
                label: "DVLabs.tech",
                to: "https://dvlabs.tech",
              },
              {
                label: "Twitter",
                to: "https://x.com/DV_Labs",
              },
              {
                label: "Blog",
                to: "https://dvlabs.tech/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Obol Labs, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: customObolDarkTheme,
        additionalLanguages: ["solidity", "json", "bash"],
      },
      metadata: [
        { property: "og:image", content: "/img/obol_og_image.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
    }),
};

module.exports = config;
