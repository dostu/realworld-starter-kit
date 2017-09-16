import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import favoriteArticle from './mutations/FavoriteArticle'

const FavoriteButton = ({ user, article }) => {
  const favorite = async () => {
    await favoriteArticle({ userId: user.id, articleId: article.id})
  }

  return (
    <button onClick={favorite} className="btn btn-sm btn-outline-primary">
      <i className="ion-heart"></i>
      &nbsp;
      Favorite Post <span className="counter">({article.favoritedBy.count})</span>
    </button>
  )
}

export default createFragmentContainer(
  FavoriteButton,
  graphql`
    fragment FavoriteButton_user on User {
      id
    }

    fragment FavoriteButton_article on Article {
      id
      favoritedBy {
        count
      }
    }
  `
)

