import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// export const query = graphql`
//   query($id: ID!) {
//     wpgraphql {
//       page(id: $id) {
//         title
//         content
//         id
//         isFrontPage
//         contentType {
//           node {
//             name
//           }
//         }
//       }
//     }
//   }
// `
const Default = () => {
  return (
    <>
      <Layout>

      </Layout>
    </>
  )
}

export default Default
