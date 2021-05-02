import React from "react"
import { graphql } from "gatsby"
import Parse from 'html-react-parser';

import Layout from "../../components/Layout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      test_article_post(id: $id) {
        id
        title(format: RENDERED)
        date
        test_article_fields {
          mainText
          mainHeading
        }
      }
    }
  }
`
export default function SingleArticle({ data }) {
  const singleArticle = data.wpgraphql.test_article_post
  return (
    <Layout>
      <div className="single-posts">
        <div className="container">
          <h1>{singleArticle.title}</h1>
          <div className="single-post__info">
            <h2>{singleArticle.test_article_fields.mainHeading}</h2>
            <span>{singleArticle.date}</span>
            {Parse(singleArticle.test_article_fields.mainText ? singleArticle.test_article_fields.mainText : '')}
          </div>
        </div>
      </div>
    </Layout>
  )
}
