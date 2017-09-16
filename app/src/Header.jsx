import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () =>
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
          <NavLink to="/register" className="nav-link" exact>Sign up</NavLink>
        </li>
      </ul>
    </div>
  </nav>

export default Header
