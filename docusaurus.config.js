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
  onBrokenLinks: "warn",
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
            to: '/next/learn/intro/obol-collective',
            from: '/docs/int/Overview',
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
            docId: "int/Overview",
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
          href: "https://obol.tech/",
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro to Obol",
                to: "/docs/int/Overview",
              },
              {
                label: "Charon",
                to: "/docs/charon/intro",
              },
              {
                label: "DV Launchpad",
                to: "/docs/dvl/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/n6ebKsX46w",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/obolnetwork",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://blog.obol.tech/",
              },
              {
                label: "GitHub",
                to: "https://github.com/obolnetwork/",
              },
              {
                label: "Status",
                to: "https://status.obol.org/",
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
