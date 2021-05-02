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
              templateName
            }
          }
        }

        contentTypes(first: 1000) {
          nodes {
            name
            id
            uri
          }
        }

        test_article_posts(first: 1000) {
          nodes {
            id
            link
            uri
            title(format: RENDERED)
            databaseId
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            test_article_fields {
              mainText
              mainHeading
            }
          }
        }
      }
    }
  `)

  // pull the page data out of the query response
  const pages = result.data.wpgraphql.pages.nodes
  const templates = []
  pages.forEach(page => {
    templates.includes(page.template.templateName) ? "" : templates.push(page.template.templateName.split(" ").join(""))
  })

  // loop through WordPress pages and create a Gatsby page for each one
  pages.forEach(page => {
    switch (page.template.templateName.split(" ").join("")) {
      case "HomePage":
        actions.createPage({
          path: page.uri,
          component: require.resolve("./src/templates/home-template.js"),
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
      case "article":
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
  const contentSinglePage = result.data.wpgraphql.test_article_posts.nodes
  contentSinglePage.forEach(testSingle => {
    actions.createPage({
      path: testSingle.uri,
      component: require.resolve("./src/templates/singles/SingleArticle.js"),
      context: {
        id: testSingle.id,
      },
    })
  })
}
