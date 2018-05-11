import auth0, { WebAuth } from 'auth0-js'
import history from './history'

class Auth {
  auth0 = new WebAuth({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    redirectUri: 'http://localhost:1234/callback',
    audience: 'https://gothbarbie.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid',
  })

  loggedIn = false

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, res) => {
      if (res) {
        localStorage.setItem('access_token', res.accessToken)
        localStorage.setItem(
          'expires_at',
          JSON.stringify(res.expiresIn * 1000 + new Date().getTime())
        )

        this.loggedIn = true
        
        history.replace('/')
      } else if (err) {
        console.error(err)
      }
    })
  }

  logout = () => {
    ['access_token', 'expires_at'].forEach(item => localStorage.removeItem(item))
    
    this.loggedIn = false
    
    history.replace('/')
  }

  isAuthenticated = () => {
    return (
      this.loggedIn &&
      new Date().getTime() < +localStorage.getItem('expires_at')
    )
  }
}

export default Auth
