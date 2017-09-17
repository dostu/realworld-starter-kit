import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { graphql, createFragmentContainer } from 'react-relay'

const LoggedOutMenu = () => (
  <ul className="nav navbar-nav pull-xs-right">
    <li className="nav-item">
      <NavLink to="/" className="nav-link" exact>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/login" className="nav-link" exact>Sign in</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/register" className="nav-link" exact>Sign up</NavLink>
    </li>
  </ul>
)

const LoggedInMenu = ({ user }) => (
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
      <NavLink to={`/profile/${user.name}`} className="nav-link" exact>
        <img src={user.profilePictureUrl} className="user-pic" />
        {user.name}
      </NavLink>
    </li>
  </ul>
)


const Header = ({ user }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">conduit</Link>
        {user ? <LoggedInMenu user={user} /> : <LoggedOutMenu />}
      </div>
    </nav>
  )
}

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header_user on User {
      name
      profilePictureUrl
    }
  `
)

