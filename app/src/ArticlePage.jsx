import React from 'react'
import { Link } from 'react-router-dom'

import Page from './Page'
import CommentForm from './CommentForm'
import Comment from './Comment'
import FollowButton from './FollowButton'
import FavoriteButton from './FavoriteButton'
import ArticleInfo from './ArticleInfo'

const ArticlePage = () =>
  <Page className="article-page">
    <div className="banner">
      <div className="container">
        <h1>How to build webapps that scale</h1>

        <div className="article-meta">
          <ArticleInfo />
          <FollowButton />
          &nbsp;&nbsp;
          <FavoriteButton />
        </div>
      </div>
    </div>

    <div className="container page">
      <div className="row article-content">
        <div className="col-md-12">
          <p>
          Web development technologies have evolved at an incredible clip over the past few years.
          </p>
          <h2 id="introducing-ionic">Introducing RealWorld.</h2>
          <p>It's a great solution for learning how other frameworks work.</p>
        </div>
      </div>

      <hr />

      <div className="article-actions">
        <div className="article-meta">
          <ArticleInfo />
          <FollowButton />
          &nbsp;
          <FavoriteButton />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <CommentForm />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  </Page>

export default ArticlePage
