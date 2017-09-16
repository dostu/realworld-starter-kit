import React from 'react'
import { graphql } from 'react-relay'
import { withRouter } from 'react-router-dom'

import QueryComponent from './relay/QueryComponent'
import Page from './Page'
import CommentForm from './CommentForm'
import Comment from './Comment'
import FollowButton from './FollowButton'
import FavoriteButton from './FavoriteButton'
import ArticleInfo from './ArticleInfo'

const ArticlePage = ({ viewer: { article, user } }) =>
  <Page className="article-page">
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>

        <div className="article-meta">
          <ArticleInfo article={article} />
          <FollowButton />
          &nbsp;&nbsp;
          <FavoriteButton user={user} article={article} />
        </div>
      </div>
    </div>
    <div className="container page">
      <div className="row article-content">
        <div className="col-md-12" dangerouslySetInnerHTML={{__html: article.body }} />
      </div>
      <hr />
      <div className="article-actions">
        <div className="article-meta">
          <ArticleInfo article={article} />
          <FollowButton />
          &nbsp;
          <FavoriteButton user={user} article={article} />
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

const ArticlePageQuery = graphql`
  query ArticlePageQuery($slug: String!) {
    viewer {
      user {
        ...FavoriteButton_user
      }
      article: Article(slug: $slug) {
        title
        body
        ...ArticleInfo_article
        ...FavoriteButton_article
      }
    }
  }
`

export default withRouter((props) => (
  <QueryComponent
    query={ArticlePageQuery}
    component={ArticlePage}
    variables={{ slug: props.match.params.slug }}
    {...props}
  />
))
