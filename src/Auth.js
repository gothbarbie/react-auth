import auth0, { WebAuth } from 'auth0-js'

class Auth {
  auth0 = new WebAuth({
    domain: 'gothbarbie.eu.auth0.com',
    clientID: 'ROyaMfIdNOYRlPQPItnR9mKqDv2xJhZ6',
    redirectUri: 'http://localhost:1234/callback',
    responseType: 'token',
  })

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication = () => {
    // TODO
  }

  logout = () => {
    // TODO
  }

  isAuthenticated = () => {
    // TODO 
    return false
  }
}

export default Auth
