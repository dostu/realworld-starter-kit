import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation SigninUserMutation($input: SigninUserInput!){
    signinUser(input: $input) {
      token
    }
  }
`

export default ({ email, password }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        email: { email, password },
        clientMutationId: ''
      }
    }

    const config = {
      mutation,
      variables,
      onCompleted: ({ signinUser }) => resolve(signinUser.token),
      onError: reject
    }

    commitMutation(environment, config)
  })
