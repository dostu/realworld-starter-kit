import React from 'react'
import { Link } from 'react-router-dom'
import { graphql, createFragmentContainer } from 'react-relay'
import moment from 'moment'

const ArticleInfo = ({ article, article: { author } }) =>
  <div style={{ display: 'inline-block' }}>
    <Link to={`/profile/${author.name}`}>
      <img src={author.profilePictureUrl} />
    </Link>
    <div className="info">
      <Link to={`/profile/${author.name}`}>{author.name}</Link>
      <span className="date">{moment(article.createdAt).format('MMMM Do')}</span>
    </div>
  </div>

export default createFragmentContainer(
  ArticleInfo,
  graphql`
    fragment ArticleInfo_article on Article {
      createdAt
      author {
        profilePictureUrl
        name
      }
    }
  `
)

