import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import AuthPage from './AuthPage'
import ProfilePage from './ProfilePage'
import SettingsPage from './SettingsPage'
import ArticlePage from './ArticlePage'
import EditorPage from './EditorPage'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={AuthPage}/>
      <Route exact path="/profile" component={ProfilePage}/>
      <Route exact path="/settings" component={SettingsPage}/>
      <Route exact path="/editor" component={EditorPage}/>
      <Route exact path="/article" component={ArticlePage}/>
    </Switch>
  </BrowserRouter>
)

export default Router
