import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { withRouter } from 'react-router-dom'

import deleteArticle from './mutations/DeleteArticle'

const DeleteArticleButton = ({ article, history }) => {
  const destroy = async () => {
    await deleteArticle({ id: article.id })
    history.push('/')
  }

  return (
    <button onClick={destroy} className="btn btn-outline-danger btn-sm">
      <i className="ion-trash-a"></i> Delete Article
    </button>
  )
}

export default createFragmentContainer(
  withRouter(DeleteArticleButton),
  graphql`
    fragment DeleteArticleButton_article on Article {
      id
    }
  `
)
