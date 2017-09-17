import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation CreateCommentMutation($input: CreateCommentInput!){
    createComment(input: $input) {
      clientMutationId
    }
  }
`

export default ({ body, articleId, authorId }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { body, articleId, authorId, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: reject
    }

    commitMutation(environment, config)
  })
