import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { Link } from 'react-router-dom'

import FollowButton from './FollowButton'
import FavoriteButton from './FavoriteButton'
import DeleteArticleButton from './DeleteArticleButton'

const ArticleActions = ({ article, user }) => {
  if (user && article.author.name === user.name) {
    return (
      <div style={{ display: 'inline' }}>
        <Link to={`/editor/${article.slug}`} className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>
        &nbsp;
        <DeleteArticleButton article={article} />
      </div>
    )
  }

  return (
    <div style={{ display: 'inline' }}>
      <FollowButton followedUser={article.author} user={user} />
      &nbsp;
      <FavoriteButton user={user} article={article} />
    </div>
  )
}

export default createFragmentContainer(
  ArticleActions,
  graphql`
    fragment ArticleActions_article on Article {
      slug
      ...FavoriteButton_article
      ...DeleteArticleButton_article
      author {
        name
        ...FollowButton_followedUser
      }
    }

    fragment ArticleActions_user on User {
      name
      ...FavoriteButton_user
      ...FollowButton_user
    }
  `
)

