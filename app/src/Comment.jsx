import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import moment from 'moment'

import ProfilePicture from './ProfilePicture'

const Comment = ({ comment, comment: { author } }) =>
  <div className="card">
    <div className="card-block">
      <p className="card-text">{comment.body}</p>
    </div>
    <div className="card-footer">
      <a href={`/profile/${author.name}`} className="comment-author">
        <ProfilePicture user={author} className="comment-author-img" />
      </a>
      &nbsp;
      <a href={`/profile/${author.name}`} className="comment-author">{author.name}</a>
      <span className="date-posted">{moment(comment.createdAt).format('MMM Do')}</span>
      <span className="mod-options">
        <i className="ion-edit"></i>
        <i className="ion-trash-a"></i>
      </span>
    </div>
  </div>

export default createFragmentContainer(
  Comment,
  graphql`
    fragment Comment_comment on Comment {
      body
      createdAt
      author {
        name
        ...ProfilePicture_user
      }
    }
  `
)

