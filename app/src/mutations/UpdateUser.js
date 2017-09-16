import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserInput!){
    updateUser(input: $input) {
      clientMutationId
    }
  }
`

export default ({ id, profilePictureUrl, name, bio, email }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { id, profilePictureUrl, name, bio, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: reject
    }

    commitMutation(environment, config)
  })
