'use strict'

const Meetup = use('App/Models/Meetup')
class MeetupController {
  async index ({ request, response, view }) {
    const meetups = await Meetup.all()
    return meetups
  }

  async store ({ request, response }) {
    const data = request.only([
      'title',
      'date',
      'description',
      'eventphoto',
      'location',
      'preference_id'
    ])
    const meetup = await Meetup.create(data)

    return meetup
  }

  async show ({ params, request, response, view, auth }) {
    const search = request.only(['title'])
    const meetups = await Meetup.query()
      .where('title', 'like', `%${search.title}%`)
      .with('users', q => q.count('id'))
      .fetch()

    return meetups
  }

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = MeetupController
