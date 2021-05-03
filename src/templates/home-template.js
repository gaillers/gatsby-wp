import React  from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Article from "../templates/archives/ArchiveArticle"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
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
const HomeTemplate = ({ data }) => {
  const page = data.wpgraphql.page
  const seo = page.seo

  return (
    <>
      <Layout>
       <Article/>
      </Layout>
    </>
  )
}

export default HomeTemplate
