import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { graphql } from 'react-relay'
import { withRouter } from 'react-router-dom'

import Page from './Page'
import QueryComponent from './relay/QueryComponent'
import updateUser from './mutations/UpdateUser'

let SettingsForm = ({ initialValues, handleSubmit }) =>
  <form onSubmit={ handleSubmit }>
    <fieldset>
      <fieldset className="form-group">
        <Field
          name="profilePictureUrl"
          component="input"
          type="text"
          className="form-control"
          placeholder="URL of profile picture"
        />
      </fieldset>

      <fieldset className="form-group">
        <Field
          name="name"
          component="input"
          type="text"
          className="form-control form-control-lg"
          placeholder="Username"
        />
      </fieldset>

      <fieldset className="form-group">
        <Field
          name="bio"
          component="textarea"
          className="form-control form-control-lg"
          placeholder="Short bio about you"
          rows="8"
        />
      </fieldset>

      <fieldset className="form-group">
        <Field
          name="email"
          component="input"
          type="text"
          className="form-control form-control-lg"
          placeholder="Email"
        />
      </fieldset>

      <fieldset className="form-group">
        <Field
          name="password"
          component="input"
          type="password"
          className="form-control form-control-lg"
          placeholder="Password"
        />
      </fieldset>

      <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
        Update Settings
      </button>
    </fieldset>
  </form>

SettingsForm = reduxForm({
  form: 'settings'
})(SettingsForm)

const SettingsPage = ({ viewer, viewer: { user } }, history) => {
  const submit = values => updateUser({ ...values, id: user.id })

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Page viewer={viewer} className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <SettingsForm onSubmit={submit} initialValues={user} />
            <hr />
            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </Page>
  )
}

const SettingsPageQuery = graphql`
  query SettingsPageQuery {
    viewer {
      ...Page_viewer
      user {
        id
        profilePictureUrl
        name
        bio
        email
      }
    }
  }
`

export default withRouter((props) => (
  <QueryComponent
    query={SettingsPageQuery}
    component={SettingsPage}
    {...props}
  />
))
