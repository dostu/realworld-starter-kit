import React from 'react'
import { Link } from 'react-router-dom'
import { graphql, createFragmentContainer } from 'react-relay'
import moment from 'moment'

import ProfilePicture from './ProfilePicture'

const ArticleInfo = ({ article, article: { author } }) =>
  <div style={{ display: 'inline-block' }}>
    <Link to={`/profile/${author.name}`}>
      <ProfilePicture user={author} />
    </Link>
    <div className="info">
      <Link to={`/profile/${author.name}`} className="author">{author.name}</Link>
      <span className="date">{moment(article.createdAt).format('MMMM Do, YYYY')}</span>
    </div>
  </div>

export default createFragmentContainer(
  ArticleInfo,
  graphql`
    fragment ArticleInfo_article on Article {
      createdAt
      author {
        name
        ...ProfilePicture_user
      }
    }
  `
)

