import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { reduxForm, Field } from 'redux-form'

let CommentForm = ({ user, handleSubmit }) =>
  <form onSubmit={handleSubmit} className="card comment-form">
    <div className="card-block">
      <Field
        name="body"
        component="textarea"
        className="form-control"
        placeholder="Write a comment..."
        rows="3"
      />
    </div>
    <div className="card-footer">
      <img src={user.profilePictureUrl} className="comment-author-img" />
      <button type="submit" className="btn btn-sm btn-primary">Post Comment</button>
    </div>
  </form>

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm)

export default createFragmentContainer(
  CommentForm,
  graphql`
    fragment CommentForm_user on User {
      profilePictureUrl
    }
  `
)
