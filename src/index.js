import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from './history'

import { App, Labrador, GoldenRetriever } from './components'
import Auth from './Auth'

const auth = new Auth()

const callbackComponent = props => {
  if (props.location.hash.includes('access_token')) {
    setTimeout(() => auth.handleAuthentication())
    return <h4>Loading...</h4>
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
}

const AuthRoute = props => {
  const { Component, path } = props  
  return (
    <Route path={path} render={() => auth.isAuthenticated() ? <Component /> : <Redirect to={{ pathname: '/' }} />} />
  )
}

render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <App auth={auth} />} />
      <Route path="/callback" render={props => callbackComponent(props)} />
      <AuthRoute path="/labrador" Component={Labrador} />
      <AuthRoute path="/golden-retriever" Component={GoldenRetriever} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
