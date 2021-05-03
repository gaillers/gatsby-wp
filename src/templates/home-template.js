import React from "react"
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
        seo {
          metaDesc
          title
          opengraphType
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
        <Helmet 
        htmlAttributes={{ lang: "en", amp: undefined }}
        title={seo.title}
        meta={
          [
            { name: "description", content: seo.metaDesc },
            { property: "og.type", content: seo.opengraphType },
            { property: "og.title", content: seo.title}
          ]
        }
        
        />
          
          <Article />
      
      </Layout>
    </>
  )
}

export default HomeTemplate
