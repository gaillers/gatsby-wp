import React  from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

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
        <Link className="link-posts"> Posts </Link>
      </Layout>
    </>
  )
}

export default HomeTemplate
