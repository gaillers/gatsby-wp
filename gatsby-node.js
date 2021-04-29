exports.createPages = async ({ actions, graphql }) => {
  // query for WordPress page data
  const result = await graphql(`
    {
      wpgraphql {
        pages(first: 5000) {
          nodes {
            id
            uri
            template {
              ... on wpgraphql_DefaultTemplate {
                templateName
              }
              ... on wpgraphql_Template_ContactUs {
                templateName
              }
              ... on wpgraphql_Template_HomePage {
                templateName
              }
              ... on wpgraphql_Template_ReviewArchivePage {
                templateName
              }
            }
          }
        }

        posts {
          nodes {
            id
            uri
          }
        }

        contentTypes(first: 1000) {
          nodes {
            name
            id
            uri
          }
        }

      }
    }
  `)

  // pull the page data out of the query response
  const pages = result.data.wpgraphql.pages.nodes
  const templates = []
  pages.forEach(page => {
    templates.includes(page.template.templateName)
      ? ""
      : templates.push(page.template.templateName.split(" ").join(""))
  })

  // loop through WordPress pages and create a Gatsby page for each one
  pages.forEach(page => {
    switch (page.template.templateName.split(" ").join("")) {
      case "Index":
        actions.createPage({
          path: page.uri,
          component: require.resolve("./src/pages/index.js"),
          context: {
            id: page.id,
          },
        })
        break
      case "HomePage":
        actions.createPage({
          path: page.uri,
          component: require.resolve("./src/templates/home-template.js"),
          context: {
            id: page.id,
          },
        })
        break
      case "PageTemplate":
        actions.createPage({
          path: page.uri,
          component: require.resolve("./src/templates/page-template.js"),
          context: {
            id: page.id,
          },
        })
        break
    }
  })

  //Archive Pages for Custom Post Types
  const contentTypes = result.data.wpgraphql.contentTypes.nodes
  contentTypes.forEach(type => {
    switch (type.name) {
      case "ArchiveArticle":
        actions.createPage({
          path: type.uri,
          component: require.resolve(
            "./src/templates/archives/ArchiveArticle.js"
          ),
          context: {
            id: type.id,
          },
        })
    }
  })

  //Single Pages for Custom Post Types
  const contentSinglePage = result.data.wpgraphql.contentSinglePage.nodes
  contentSinglePage.forEach(article => {
    actions.createPage({
      path: article.uri,
      component: require.resolve("./src/customPostTypes/SingleArticle.js"),
      context: {
        id: article.id,
      },
    })
  })
}
