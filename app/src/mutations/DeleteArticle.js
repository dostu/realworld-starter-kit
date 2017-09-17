import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation DeleteArticleMutation($input: DeleteArticleInput!){
    deleteArticle(input: $input) {
      clientMutationId
    }
  }
`

export default ({ id }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { id, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: reject
    }

    commitMutation(environment, config)
  })
