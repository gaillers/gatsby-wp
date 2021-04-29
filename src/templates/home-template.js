import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import "../assets/normalize.css"

export const query = graphql`
  query{
    wpgraphql {
      page(id: "cG9zdDo2") {
        title
        content
        id
        isFrontPage
        contentType {
          node {
            name
          }
        }
      }
    }
  }
`
const HomeTemplate = () => {
//   const page = data.wpgraphql.page
//   const pageInfo = {
//    isFrontPage: page.isFrontPage,
//    contentType: page.contentType,
//    title: page.title,
//  }

  return (
    <>
      <Layout pageInfo={pageInfo}>
         
      </Layout>
    </>
  )
}

export default HomeTemplate
