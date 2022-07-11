const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Web3 Foundation Grants',
  tagline: 'Funding software development and research efforts related to Polkadot, Kusama, Substrate and ink!',
  url: 'https://w3f.github.io',
  baseUrl: '/grants/',
  onBrokenLinks: 'warn',    // Revert back to 'throw' once initial release is up
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Web3Foundation.png',
  organizationName: 'w3f', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'grants', // Usually your repo name.

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,

    },
    announcementBar: {
      id: 'announcement',
      content:
        '<h4>Check out <a target="_blank" rel="noopener noreferrer" href="https://web3.bamboohr.com/jobs/">our current job openings</a>!</h4>',
      backgroundColor: '#E6007A',
      textColor: '#ffffff',
      isCloseable: true,
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
          docId: 'Introduction/index',
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'apply',
          position: 'left',
          label: 'Apply',
        }

      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/w3f/Grants-Program',
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
            }
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
            'https://github.com/w3f/grants/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/w3f/grants/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
