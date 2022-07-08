const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Web3 Education Grants',
  tagline: 'Web3 Education Grants',
  url: 'https://w3f.github.io',
  baseUrl: '/grants/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Web3Foundation.png',
  organizationName: 'w3f', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'grants', // Usually your repo name.

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,

      },
    navbar: {
      title: 'W3F Grants Program',
      logo: {
        alt: 'W3F Grants Program',
        src: 'img/Web3Foundation.png',
      },
      items: [

        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Grants',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Links',
          items: [
            {
              label: 'Wiki',
              href: 'https://wiki.polkadot.network/',
            },
            {
              label: 'Website',
              href: 'https://web3.foundation/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Web3foundation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/w3f/grants',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Web3 Foundation. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl:
            'https://github.com/w3f/grants/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/w3f/grants/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
