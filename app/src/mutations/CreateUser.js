import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation CreateUserMutation($input: SignupUserInput!){
    createUser(input: $input) {
      clientMutationId
    }
  }
`

export default ({ email, password }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
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
