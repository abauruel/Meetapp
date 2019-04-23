'use strict'
const moment = require('moment')
const User = use('App/Models/User')
const Meetup = use('App/Models/Meetup')
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

  async showMeetupsNotRegistred ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    const preferences = await user.preferences().fetch()
    const preferencesArray = []
    preferences.toJSON().map(m => preferencesArray.push(m.id))
    const meetups = await Meetup.query()
      .where(`date`, '>', `${moment(Date.now()).format('YYYY-MM-DD')}`)
      .whereIn('preference_id', preferencesArray)
      .with('users', builder => {
        builder.where('user_id', '<>', auth.user.id)
      })
      .fetch()

    return meetups
  }

  async showMeetupsRegistred ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    const meetups = user
      .meetups()
      .where('meetups.date', '>', `${moment(Date.now()).format('YYYY-MM-DD')}`)
      .fetch()

    return meetups
  }
}

module.exports = UserController
