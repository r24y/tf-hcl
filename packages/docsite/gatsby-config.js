module.exports = {
  siteMetadata: {
    title: 'tf-hcl',
    description: 'Parser for Hashicorp Configuration Language',
    siteUrl: 'https://r24y.github.io/tf-hcl',
    author: 'r24y',
    twitter: '_r24y',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: '@r24y/gatsby-source-filesystem',
      options: {
        path: [`${__dirname}/../../README.md`, `${__dirname}/src/pages`],
        rootPath: `${__dirname}/src/pages`,
        name: 'pages',
        skipPathCheck: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tf-hcl',
        short_name: 'tf-hcl',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
