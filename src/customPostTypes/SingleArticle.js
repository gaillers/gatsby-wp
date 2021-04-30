import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import "../assets/scss/singleArticle.scss"

export default function SingleArticle() {
  const single = useStaticQuery(graphql`
    query {
      wpgraphql {
        test_article_post(id: "cG9zdDo1NzY=") {
          id
          date
          title(format: RENDERED)
          test_article_fields {
            mainHeading
            mainText
          }
        }
      }
    }
  `)

  const singleArticle = single.wpgraphql.test_article_post

  return (
    <Layout>
      <div className="single-posts">
        <div className="container">
          <h1>{singleArticle.title}</h1>
          <div className="single-post__info">
            <h2>{singleArticle.test_article_fields.mainHeading}</h2>
            <span>{singleArticle.date}</span>
            <p>{singleArticle.test_article_fields.mainText}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
