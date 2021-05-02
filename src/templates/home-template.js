import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

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
  return (
    <>
      <Layout pageInfo={pageInfo}>
         
      </Layout>
    </>
  )
}

export default HomeTemplate
