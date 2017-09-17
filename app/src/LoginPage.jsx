import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { graphql } from 'react-relay'
import { withRouter } from 'react-router-dom'

import Page from './Page'
import signinUser from './mutations/SigninUser'
import QueryComponent from './relay/QueryComponent'

let LoginForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit} >
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
      Sign in
    </button>
  </form>

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

class LoginPage extends Component {
  state = {
    errors: []
  }

  submit = async (values) => {
    try {
      const token = await signinUser(values)
      localStorage.setItem('token', token)
      this.props.history.push('/')
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
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>

              <ul className="error-messages">
                {this.state.errors.map((error, index) => <li key={index}>{error.message}</li>)}
              </ul>

              <LoginForm onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

const LoginPageQuery = graphql`
  query LoginPageQuery {
    viewer {
      ...Page_viewer
    }
  }
`

export default withRouter((props) => (
  <QueryComponent
    query={LoginPageQuery}
    component={LoginPage}
    {...props}
  />
))
