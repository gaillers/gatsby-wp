import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/Layout"

const shortid = require("shortid")

export const query = graphql`
  query {
    wpgraphql {
      test_article_post(id: "cG9zdDo1NzY=") {
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
        contentType {
          node {
            name
          }
        }
      }
    }
  }
`

const SingleArticle = () => {
  return (
    <Layout>
      <div className="single-post">
        
      </div>
    </Layout>
  )
}

export default SingleArticle
