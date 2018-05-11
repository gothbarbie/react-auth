import React from 'react'
import { Button } from 'react-bootstrap'

const Login = props => (
  <div>
    <h2>Doggie Hub</h2>
    <Button onClick={props.login}>Log in</Button>
  </div>
)

export default Login
