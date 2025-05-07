const config = {
  title: 'Iwaken Lab.',
  tagline: 'AIと検索エンジンが理解できるラボの公式サイト',
  favicon: 'img/favicon.ico',
  url: 'https://iwakenlab.github.io',
  baseUrl: '/',
  organizationName: 'iwakenlab',
  projectName: 'iwakenlab.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
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
          routeBasePath: '/',
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
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'tutorialSidebar',
          label: 'ラボ概要',
        },
        {
          to: '/history',
          label: '歴史',
          position: 'left',
        },
        {
          to: '/members',
          label: 'メンバー',
          position: 'left',
        },
        {
          to: '/achievements',
          label: '活動実績',
          position: 'left',
        },
        {
          href: 'https://github.com/iwakenlab',
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
              to: '/',
            },
            {
              label: '理念・背景',
              to: '/philosophy',
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
    scripts: [
      {
        src: '/js/member-search.js',
        async: true,
      },
    ],
  },
};

module.exports = config; 