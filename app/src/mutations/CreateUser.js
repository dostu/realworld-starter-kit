import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation CreateUserMutation($input: SignupUserInput!){
    createUser(input: $input) {
      clientMutationId
    }
  }
`

export default ({ name, email, password }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        name,
        authProvider: { email: { email, password } },
        clientMutationId: ''
      }
    }

    const config = {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: reject
    }

    commitMutation(environment, config)
  })
