import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `lookhowgoodmydogis`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "design-system": "radix-design-system/src",
        },
        extensions: []
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "lookhowgoodmydogis",
        protocol: "https",
        hostname: "lookhowgoodmydog.is",
      },
    },
  ],
}

export default config
