import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../../components/Layout"

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

  const items = testArticlePosts.wpgraphql.test_article_posts.nodes

  return (
      <div className="posts-article">
        <div className="container">
          {items.map(item => {
            const imgPrew = item.featuredImage
              ? item.featuredImage.node.mediaItemUrl
              : ""

            return (
              <div key={item.id} className="posts-item">
                <Link to={item.uri}>
                  <img src={imgPrew} />
                </Link>
                <div className="posts-item__info">
                  <h3>{item.title}</h3>
                  <Link to={item.uri}>read more</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
  )
}
