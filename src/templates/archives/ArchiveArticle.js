import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

// import Layout from "../components/Layout"

import "../../assets/scss/archiveArticle.scss"

export default function ArchiveArticle() {
  const testArticlePosts = useStaticQuery(graphql`
    query {
      wpgraphql {
        test_article_posts(first: 1000) {
          nodes {
            id
            uri
            link
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

  const items = testArticlePosts.wpgraphql.test_article_posts.nodes.map(
    item => ({ ...item })
  )

  return (
    <div className="posts-article">
      <div class="container">
        {items.map(item => (
          <div key={item.id} className="posts-item">
            <Link key={item.uri} to={item.link}>
              <img src="https://wacky-tent.flywheelsites.com/wp-content/uploads/2021/03/Vavada-1.png" />
            </Link>
            <div className="posts-item__info">
              <h3>{item.title}</h3>
              <Link key={item.uri} to={item.link}>
                read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
