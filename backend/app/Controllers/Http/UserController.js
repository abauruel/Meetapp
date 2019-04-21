'use strict'
const User = use('App/Models/User')
class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)

    return user
  }
  async update ({ request, auth }) {
    const data = request.all()

    const user = await User.findOrFail(auth.user.id)

    if (!data.preferences) {
      user.merge(data)
      await user.save()
      return user
    }

    await user.preferences().sync(data.preferences)
    user.merge({
      username: data.username,
      password: data.password
    })
    await user.save()
    user.preferences = await user.preferences().fetch()

    return user
  }
}

module.exports = UserController
