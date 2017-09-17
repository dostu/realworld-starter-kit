import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import ProfilePage from './ProfilePage'
import SettingsPage from './SettingsPage'
import ArticlePage from './ArticlePage'
import EditorPage from './EditorPage'
import EditorEditPage from './EditorEditPage'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/register" component={RegistrationPage}/>
      <Route exact path="/profile/:name" component={ProfilePage}/>
      <Route exact path="/settings" component={SettingsPage}/>
      <Route exact path="/editor" component={EditorPage}/>
      <Route exact path="/editor/:slug" component={EditorEditPage}/>
      <Route exact path="/article/:slug" component={ArticlePage}/>
    </Switch>
  </BrowserRouter>
)

export default Router
