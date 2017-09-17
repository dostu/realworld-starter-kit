import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation UpdateArticleMutation($input: UpdateArticleInput!){
    updateArticle(input: $input) {
      article {
        slug
      }
    }
  }
`

export default ({ id, title, description, body }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { id, title, description, body, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: ({ updateArticle: { article } }) => resolve(article.slug),
      onError: reject
    }

    commitMutation(environment, config)
  })
