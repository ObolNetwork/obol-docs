// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");
// Override code blocks to be Obol coloured
const customObolDarkTheme = {
  ...darkCodeTheme,
  plain: { color: "#bfc7d5", backgroundColor: "#243D42" },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Obol Network",
  tagline: "Building Distributed Validators for Ethereum",
  url: "https://docs.obol.tech/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
    //   },
    // ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ObolNetwork/obol-docs/edit/main/",
        },
        blog: false,
        debug: true,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "GTM-NZ2HGMB",
        anonymizeIP: true,
      },
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            // spec: 'https://api.obol.tech/docs-json',
            spec:"./static/api-spec.yaml",
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
            docId: "int/obol_overview",
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
                to: "/docs/int/obol_overview",
              },
              {
                label: "Charon",
                to: "/docs/charon/intro",
              },
              {
                label: "DV Launchpad",
                to: "/docs/dvl_intro",
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Obol Labs, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: customObolDarkTheme,
        additionalLanguages: ["solidity", "json5"],
      },
      metadata: [
        { property: "og:image", content: "/img/obol_og_image.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
    }),
};

module.exports = config;
