import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import Page from './Page'
import createUser from './mutations/CreateUser'

let RegistrationForm = ({ handleSubmit }) =>
  <form onSubmit={ handleSubmit } >
    <fieldset className="form-group">
      <Field
        name="name"
        component="input"
        type="text"
        className="form-control form-control-lg"
        placeholder="Your Name"
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
      Sign up
    </button>
  </form>

RegistrationForm = reduxForm({
  form: 'registration'
})(RegistrationForm)

const RegistrationPage = ({ history }) => {
  const submit = async (values) => {
    await createUser(values)
    history.push(`/login`)
  }

  return (
    <Page className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            <RegistrationForm onSubmit={submit} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default RegistrationPage
