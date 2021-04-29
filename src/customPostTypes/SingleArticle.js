import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import "../assets/scss/singleArticle.scss"

export default function SingleArticle() {
  const single = useStaticQuery(graphql`
    query {
      wpgraphql {
        test_article_posts(first: 1000) {
          nodes {
            title
            uri
            content
            date
            id
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            test_article_fields {
              mainHeading
              mainText
            }
          }
        }
      }
    }
  `)

  const singleArticle = single.wpgraphql.test_article_posts.nodes

  return (
    <Layout>
      <div className="single-post">
        <div className="single-post__info">
          <h1>{singleArticle.title}</h1>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}
