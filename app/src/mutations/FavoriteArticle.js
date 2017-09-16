import { graphql, commitMutation } from 'react-relay'

import environment from '../relay/environment'

const mutation = graphql`
  mutation FavoriteArticleMutation($input: AddToFavoriteArticlesUserInput!){
    addToFavoriteArticles(input: $input) {
      clientMutationId
    }
  }
`

export default ({ articleId, userId }) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: { favoritedArticlesArticleId: articleId, favoritedByUserId: userId, clientMutationId: '' }
    }

    const config = {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: reject
    }

    commitMutation(environment, config)
  })
