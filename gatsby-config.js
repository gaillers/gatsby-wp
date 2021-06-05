module.exports = {
  siteMetadata: {
    title: "Gatsby With Apollo",
  },

  plugins: [
    // {
    //   resolve: "gatsby-source-gravityforms",
    //   options: {
    //     // Base URL needs to include protocol (http/https)
    //     baseUrl: "https://wacky-tent.flywheelsites.com/graphql",
    //     include: [3], // Array of form IDs. Will only import these forms.
    //     exclude: [3], // Array of form IDs. Will exclude these forms.
    //     // Gravity Forms API
    //     allowSelfSigned: false,
    //     api: {
    //       key: "4bb237068c",
    //       secret: "8bfe92327ae18e8",
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "wpgraphql",
        fieldName: "wpgraphql",
        url: "https://wacky-tent.flywheelsites.com/graphql",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
  ],
}
