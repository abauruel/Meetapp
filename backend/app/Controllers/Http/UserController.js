'use strict'
const moment = require('moment')
const User = use('App/Models/User')
const Meetup = use('App/Models/Meetup')
class UserController {
  async index ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    user.preferences = await user.preferences().fetch()

    return user
  }
  async isFirstLogin ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    return user.islogin
  }

  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])
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
      name: data.name,
      password: data.password
    })
    await user.save()
    user.preferences = await user.preferences().fetch()

    return user
  }

  async showMeetupsNotRegistred ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    const userPreferences = await user.preferences().fetch()

    const userPreferencesArray = []
    userPreferences.toJSON().map(m => userPreferencesArray.push(m.id))
    const inscriptionsArray = []
    const enrolled = await user.meetups().fetch()
    enrolled.toJSON().map(i => inscriptionsArray.push(i.id))
    const meetups = await Meetup.query()
      .where(`date`, '>', `${moment(Date.now()).format('YYYY-MM-DD')}`)
      .with('preferences', q => q.whereIn('id', userPreferencesArray))
      .whereNotIn('id', inscriptionsArray)
      .fetch()

    return meetups
  }

  async showMeetupsRegistred ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    console.log(user.id)
    const meetups = user
      .meetups()
      // .where('meetups.date', '>', `${moment(Date.now()).format('YYYY-MM-DD')}`)
      .innerJoin('files', 'meetups.id', 'files.meetup_id')
      .with('files')
      .fetch()

    return meetups
  }
}

module.exports = UserController
