import React from 'react'
import { Link } from 'react-router-dom'
import { graphql, createFragmentContainer } from 'react-relay'

import ArticleInfo from './ArticleInfo'

const ArticlePreview = ({ article }) =>
  <div className="article-preview">
    <div className="article-meta">
      <ArticleInfo article={article} />

      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> 29
      </button>
    </div>
    <Link to={`/article/${article.slug}`} className="preview-link">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <span>Read more...</span>
      <ul className="tag-list">
        <li className="tag-default tag-pill tag-outline">Music</li>
        <li className="tag-default tag-pill tag-outline">Song</li>
      </ul>
    </Link>
  </div>

export default createFragmentContainer(
  ArticlePreview,
  graphql`
    fragment ArticlePreview_article on Article {
      slug
      title
      description
      ...ArticleInfo_article
    }
  `
)
