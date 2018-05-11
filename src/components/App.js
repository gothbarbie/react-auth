import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

const Home = () => (
  <div>
    <h2>Doggie Hub</h2>
    <ul>
      <li>
        <Link to="/labrador">Labrador</Link>
      </li>
      <li>
        <Link to="/golden-retriever">Golden Retriever</Link>
      </li>
    </ul>
  </div>
)

const App = props => (
  <div>
    {props.auth.isAuthenticated() ? <Home /> : <Login {...props} /> }
  </div>
)

export default App
