import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { withRouter } from 'react-router-dom'

import Page from './Page'
import createArticle from './mutations/CreateArticle'

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


const EditorPage = ({ handleSubmit, history }) => {
  const submit = async (values) => {
    const articleSlug = await createArticle(values)
    history.push(`/article/${articleSlug}`)
  }

  return (
    <Page className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <EditorForm onSubmit={submit} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default withRouter(EditorPage)
