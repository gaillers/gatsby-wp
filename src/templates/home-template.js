import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import "../assets/normalize.css";


export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`
const HomeTemplate = ({ data }) => {
  const page = data.wpgraphql.page
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <Layout>
      
      </Layout>
    </>
  )
}

export default HomeTemplate