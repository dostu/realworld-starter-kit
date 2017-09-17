import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation CreateArticleMutation($input: CreateArticleInput!){
    createArticle(input: $input) {
      article {
        slug
      }
    }
  }
`

export default ({ title, description, body, authorId }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { title, description, body, authorId, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: ({ createArticle }) => resolve(createArticle.article.slug),
      onError: reject
    }

    commitMutation(environment, config)
  })
