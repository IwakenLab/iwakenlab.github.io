const config = {
  title: 'Iwaken Lab.',
  tagline: 'AIと検索エンジンが理解できるラボの公式サイト',
  favicon: 'img/favicon.ico',
  url: 'https://iwakenlab.github.io',
  baseUrl: '/',
  organizationName: 'iwakenlab',
  projectName: 'iwakenlab.github.io',
  deploymentBranch: 'main',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/iwakenlab/iwakenlab.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Iwaken Lab.',
      logo: {
        alt: 'Iwaken Lab. Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'ドキュメント',
        },
        {
          href: 'https://github.com/iwakenlab/iwakenlab.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'ラボ概要',
              to: '/docs/index',
            },
            {
              label: '理念・背景',
              to: '/docs/philosophy',
            },
          ],
        },
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/iwakenlab',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iwaken Lab. Built with Docusaurus.`,
    },
  },
};

module.exports = config; 