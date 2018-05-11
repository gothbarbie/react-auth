import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'
import Logout from './Logout'

const Home = props => (
  <div>
    <h2>Doggie Hub</h2>
    <ul>
      <li>
        <Link to="/labrador">Labrador</Link>
      </li>
      <li>
        <Link to="/golden-retriever">Golden Retriever</Link>
      </li>
      <li>
        <Logout {...props} />
      </li>
    </ul>
  </div>
)

const App = props => (
  <div>
    {props.auth.isAuthenticated() ? <Home {...props} /> : <Login {...props} /> }
  </div>
)

export default App
