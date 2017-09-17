import React from 'react'
import { reduxForm, Field } from 'redux-form'

let EditorForm = ({ handleSubmit }) =>
  <form onSubmit={ handleSubmit }>
    <fieldset>
      <fieldset className="form-group">
        <Field
          name="title"
          component="input"
          type="text"
          className="form-control form-control-lg"
          placeholder="Article Title"
        />
      </fieldset>

      <fieldset className="form-group">
        <Field
          name="description"
          component="input"
          type="text"
          className="form-control"
          placeholder="What's this article about?"
        />
      </fieldset>

      <fieldset className="form-group">
          <Field
            name="body"
            component="textarea"
            className="form-control"
            rows="8"
            placeholder="Write your article (in markdown)"
          />
      </fieldset>

      <fieldset className="form-group">
        <input type="text" className="form-control" placeholder="Enter tags"/>
        <div className="tag-list"></div>
      </fieldset>

      <button type="submit" className="btn btn-lg pull-xs-right btn-primary">
        Publish Article
      </button>
    </fieldset>
  </form>

EditorForm = reduxForm({
  form: 'editor'
})(EditorForm)

export default EditorForm
