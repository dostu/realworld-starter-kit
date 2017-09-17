import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'

import Page from './Page'
import createUser from './mutations/CreateUser'
import QueryComponent from './relay/QueryComponent'

let RegistrationForm = ({ handleSubmit }) =>
  <form onSubmit={ handleSubmit } >
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

class RegistrationPage extends Component {
  state = {
    errors: []
  }

  submit = async (values) => {
    try {
      await createUser(values)
      this.props.history.push(`/login`)
    } catch (error) {
      this.setState({ errors: error })
    }
  }

  render() {
    return (
      <Page viewer={this.props.viewer} className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>

              <ul className="error-messages">
                {this.state.errors.map((error, index) => <li key={index}>{error.message}</li>)}
              </ul>

              <RegistrationForm onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

const RegistrationPageQuery = graphql`
  query RegistrationPageQuery {
    viewer {
      ...Page_viewer
    }
  }
`

export default () => (
  <QueryComponent
    query={RegistrationPageQuery}
    component={RegistrationPage}
  />
)
