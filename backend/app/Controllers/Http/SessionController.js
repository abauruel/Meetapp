'use strict'

class SessionController {
  aysnc store({request, response, auth}) {
    const {email, password} = request.all()

    const token = await auth.attempt(email, password )

    return token;
  }
}

module.exports = SessionController
