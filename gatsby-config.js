module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'wpgraphql',
        fieldName: 'wpgraphql',
        url: 'https://wacky-tent.flywheelsites.com/graphql'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
