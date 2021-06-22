const { resolve } = require('path')
const implicitFigures = require('markdown-it-implicit-figures')
const slugify = require('./slugify')
const preprocessMarkdown = resolve(__dirname, 'preprocessMarkdown')

const title = 'BTCPay Server Blog'
const baseUrl = 'https://blog.btcpayserver.org'
const pageSuffix = '/'
const info = {
  name: title,
  twitter: 'btcpayserver'
}
const extractDescription = text => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_\(\)\[\]]/g, '') : null
}

module.exports = {
  title,
  description: "Official BTCPay Server Blog",
  head: [
    ["link", { rel: "stylesheet", href: "/styles/btcpayserver-variables.css" }]
  ],
  chainWebpack (config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use(preprocessMarkdown)
        .loader(preprocessMarkdown)
        .end()
  },
  plugins: [
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description || extractDescription($page._strippedContent),
      author: (_, $site) => info,
      tags: $page => ($page.frontmatter.tags || ['BTCPay Server']),
      twitterCard: _ => 'summary',
      type: $page => 'article',
      url: (_, $site, path) => `${baseUrl}${path.replace('.html', pageSuffix)}`,
      image: ($page, $site) => `${baseUrl}/card.png`
    }],
    ['clean-urls', {
      normalSuffix: pageSuffix,
      indexSuffix: pageSuffix,
      notFoundPath: '/404.html',
    }],
    ['code-copy', {
      color: '#8F979E',
      backgroundTransition: false,
      staticIcon: true
    }],
    ['@vuepress/medium-zoom'],
    ['@vuepress/blog',
      {
        sitemap: {
          hostname: baseUrl,
          exclude: ['/404.html']
        },
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            title: '', // effectively sets home page title to just "BTCPay Server Blog"
            path: '/',
            pagination: {
              lengthPerPage: 2,
            },
          },
        ],
        frontmatters: [
          {
            id: 'category',
            keys: ['category', 'categories'],
            path: '/categories/',
            title: '', // sets extended title of individual author pages (follows author name)
            frontmatter: {
              title: 'Categories', // sets title of /categories/ page
            },
          },
          {
            id: 'author',
            keys: ['author', 'authors'],
            path: '/authors/',
            title: '– Posts', // sets extended title of individual category pages (follows category name)
            frontmatter: {
              title: 'Authors', // sets title of /authors/ page
            },
          },
        ],
      },],
  ],
  markdown: {
    extendMarkdown (md) {
      md.use(implicitFigures)
    },
    pageSuffix,
    slugify
  },
  themeConfig: {
    domain: baseUrl,
    logo: "/img/btcpay-logo.svg",
    displayAllHeaders: false,
    repo: "btcpayserver/blog",
    docsDir: "blog",
    sidebarDepth: 0,
    nav: [
      {
        text: "Website",
        link: "https://btcpayserver.org/",
        rel: "noopener noreferrer website"
      },
      {
        text: "Chat",
        link: "https://chat.btcpayserver.org/",
        rel: "noopener noreferrer chat"
      },
      {
        text: "GitHub",
        link: "https://github.com/btcpayserver/",
        rel: "noopener noreferrer github"
      },
      {
        text: "Twitter",
        link: "https://twitter.com/BtcpayServer",
        rel: "noopener noreferrer twitter"
      }
    ]
  }
}
