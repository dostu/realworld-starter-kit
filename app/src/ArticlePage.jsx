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
import createComment from './mutations/CreateComment'

const ArticlePage = ({ viewer, viewer: { article, user } }) => {
  const comment = async values => {
    await createComment({ ...values, articleId: article.id, authorId: user.id })
  }

  return (
    <Page viewer={viewer} className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <div className="article-meta">
            <ArticleInfo article={article} />
            <FollowButton followedUser={article.author} user={user} />
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
            <FollowButton followedUser={article.author} user={user} />
            &nbsp;
            <FavoriteButton user={user} article={article} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentForm user={user} onSubmit={comment} />
            {article.comments.edges.map((edge, index) => <Comment comment={edge.node} key={index} />)}
          </div>
        </div>
      </div>
    </Page>
  )
}

const ArticlePageQuery = graphql`
  query ArticlePageQuery($slug: String!) {
    viewer {
      ...Page_viewer
      user {
        id
        ...FavoriteButton_user
        ...FollowButton_user
        ...CommentForm_user
      }
      article: Article(slug: $slug) {
        id
        title
        body
        ...ArticleInfo_article
        ...FavoriteButton_article
        author {
          ...FollowButton_followedUser
        }
        comments {
          edges {
            node {
              ...Comment_comment
            }
          }
        }
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
