// import React from "react"
// import GravityFormForm from "gatsby-gravityforms-component"
// import { useStaticQuery, graphql } from "gatsby"

// // import "node_modules/gatsby-gravityforms-component/fragments.js"

// const allGravityData = () => {
//   const { allGfForm } = useStaticQuery(
//     graphql`
//       query {
//         allGfForm {
//           edges {
//             node {
//               test
//             }
//           }
//         }
//       }
//     `
//   )
//   return allGfForm
// }

// const handleError = ({ values, error, reset }) => {}

// const handleSuccess = ({ values, reset, confirmations }) => {}

// const examplePage = () => (
//   <GravityFormForm
//     id={3}
//     formData={allGravityData()}
//     presetValues={{ input_1: "special_value" }}
//     lambda={process.env.LAMBDA_ENDPOINT}
//     successCallback={handleSuccess}
//     errorCallback={handleError}
//   />
// )

// export default examplePage
