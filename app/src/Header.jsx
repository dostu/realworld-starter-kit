import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { graphql, createFragmentContainer } from 'react-relay'

const Header = ({ user }) => {
  const renderProfileButton = () => {
    if (user) {
      return <NavLink to={`/profile/${user.name}`} className="nav-link" exact>{user.name}</NavLink>
    }

    return <NavLink to="/register" className="nav-link" exact>Sign up</NavLink>
  }

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/editor" className="nav-link" exact>
              <i className="ion-compose"></i>&nbsp;New Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link" exact>
              <i className="ion-gear-a"></i>&nbsp;Settings
            </NavLink>
          </li>
          <li className="nav-item">
            {renderProfileButton()}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header_user on User {
      name
    }
  `
)

