import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const CONTACT_MUTATION = gql`
 mutation CreateSubmissionMutation
 ($clientMutationId: String!, $firstName: String!, $lastName: String!, $email: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, firstName: $firstName, lastName: $lastName, email: $email}){
       success
       data
    }
 }
`

const TestForm = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")

  return (
    <Mutation mutation={CONTACT_MUTATION}>
      {(createSubmission, { loading, error, data }) => (

        <React.Fragment >
          <div id="testForm" style={{padding: '20px'}}>
            <form
              onSubmit={async event => {
                event.preventDefault()
                createSubmission({
                  variables: {
                    clientMutationId: "example",
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    email: emailValue,
                  },
                })
              }}
            >
              <label htmlFor="firstNameInput">First Name:</label>
              <input
                className="firstNameInput"
                id="firstNameInput"
                value={firstNameValue}
                onChange={event => {
                  setFirstNameValue(event.target.value)
                }}
              />

              <br />

              <label htmlFor="lastNameInput">Last Name:</label>
              <input
                className="lastNameInput"
                id="lastNameInput"
                value={lastNameValue}
                onChange={event => {
                  setLastNameValue(event.target.value)
                }}
              />

              <br />

              <label htmlFor="emailInput">Email:</label>
              <input
                className="emailInput"
                id="emailInput"
                value={emailValue}
                onChange={event => {
                  setEmailValue(event.target.value)
                }}
              />

              <br />

              <button type="submit">Send it!</button>
            </form>

            <div style={{ padding: "20px" }}>
              {loading && <p>Loading...</p>}
              {error && (
                <p>An unknown error has occured, please try again later...</p>
              )}
              {data && <p>Thanks for contacting us</p>}
            </div>
          </div>
        </React.Fragment>
        
      )}
    </Mutation>
  )
}

export default TestForm
