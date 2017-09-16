import React from 'react'
import { Link } from 'react-router-dom'

import ArticleInfo from './ArticleInfo'

const ArticlePreview = () =>
  <div className="article-preview">
    <div className="article-meta">
      <ArticleInfo />

      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> 29
      </button>
    </div>
    <Link to="/article" className="preview-link">
      <h1>How to build webapps that scale</h1>
      <p>This is the description for the post.</p>
      <span>Read more...</span>
    </Link>
  </div>

export default ArticlePreview
