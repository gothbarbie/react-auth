import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'

import history from './history'

import { App, Labrador, GoldenRetriever } from './components'

render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/labrador" component={Labrador} />
      <Route path="/golden-retriever" component={GoldenRetriever} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
