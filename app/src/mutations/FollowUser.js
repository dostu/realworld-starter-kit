import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation FollowUserMutation($input: AddToFollowedUsersUserInput!){
    addToFollowedUsers(input: $input) {
      clientMutationId
    }
  }
`

export default ({ followedUserId, userId }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { followedUsersUserId: followedUserId, followedByUserId: userId, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: reject
    }

    commitMutation(environment, config)
  })
