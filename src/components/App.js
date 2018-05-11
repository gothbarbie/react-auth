import React from 'react'
import { Link } from 'react-router-dom'

const App = () => (
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

export default App
