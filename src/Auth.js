import auth0, { WebAuth } from 'auth0-js'

class Auth {
  auth0 = new WebAuth({
    domain: 'gothbarbie.eu.auth0.com',
    clientID: 'ROyaMfIdNOYRlPQPItnR9mKqDv2xJhZ6'
  })
}
