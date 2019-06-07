if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  require("dotenv").config({ path: "./.env.development" })
}

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stripe",
    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: ["Sku"],
        secretKey: process.env.STRIPE_SECRET_KEY,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
