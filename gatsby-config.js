module.exports = {
  siteMetadata: {
    title: `amaNekublog`,
    author: {
      name: `ネク`,
      summary: `個人ゲーム開発を夢見るITエンジニア。ドット絵・イラスト・デザインにも挑戦したいと思っている。最近一児の新米パパになり子育てに奮闘中。`,
    },
    description: `ゲーム・プログラミング・ドット絵・イラスト・デザインを中心にお役立ち情報から個人的な考えまで”あまねく”発信します。`,
    siteUrl: `https://nekumiyama.github.io/amaNekublog`,
    social: {
      twitter: `nekumiyama`,
    },
    categories: [
      {
        name: `Develop`,
        color: `#FFB6C1`,
        icon: `💻`,
      },
      {
        name: `Create`,
        color: `#87CEFA`,
        icon: `🎨`,
      },
      {
        name: `Learn`,
        color: `#98FB98`,
        icon: `📔`,
      },
      {
        name: `Try`,
        color: `#F0E68C`,
        icon: `🧪`,
      },
      {
        name: `Enjoy`,
        color: `#DDA0DD`,
        icon: `😍`,
      },
      {
        name: `Think`,
        color: `#EE82EE`,
        icon: `💡`,
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-177280250-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amaNekublog | ネクのブログ`,
        short_name: `amaNekublog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/avater.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/amaNekublog",
}
