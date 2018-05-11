import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from './history'

import { App, Labrador, GoldenRetriever } from './components'
import Auth from './Auth'

const auth = new Auth()

const callbackComponent = props => {
  if (props.location.hash.includes('access_token')) {
    return <h4>loading...</h4>
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
}

render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <App auth={auth} />} />
      <Route path="/callback" render={props => callbackComponent(props)} />
      <Route path="/labrador" component={Labrador} />
      <Route path="/golden-retriever" component={GoldenRetriever} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
