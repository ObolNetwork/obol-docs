// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Obol Network',
  tagline: 'Building Distributed Validator Technology for Ethereum',
  url: 'https://docs.obol.tech/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'obolnetwork', // Usually your GitHub org/user name.
  projectName: 'obol-docs', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/obolnetwork/obol-docs/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/obolnetwork/obol-docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          darkIconStyle: {
            marginLeft: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '\u2600',
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      navbar: {
        title: 'Obol Network',
        logo: {
          alt: 'Obol Network Logo',
          src: 'img/ObolIcon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://blog.obol.tech', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/obolnetwork/obol-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: "Obol Network Logo",
          src: "https://obol.tech/ObolIcon.png",
          srcDark: "https://obol.tech/ObolIconWhite.png",
          width: "30px",
          height: "30px",
          href: "https://obol.tech/"
      },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro to Obol',
                to: '/docs/intro',
              },
              {
                label: 'Charon',
                to: '/docs/dv/introducing-charon',
              },
              {
                label: 'Delphi',
                to: '/docs/dvk/distributed-validator-keys',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/n6ebKsX46w',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/obolnetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.obol.tech/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/obolnetwork/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Obol Labs, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
