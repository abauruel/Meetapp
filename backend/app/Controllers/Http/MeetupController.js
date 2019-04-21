'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with meetups
 */
const Meetup = use('App/Models/Meetup')
class MeetupController {
  async index ({ request, response, view }) {
    const meetups = await Meetup.all()
    console.log(meetups.toJSON())
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

  async show ({ params, request, response, view }) {
    const search = request.only(['title'])
    const meetups = await Meetup.query()
      .where('title', 'like', `%${search.title}%`)
      .fetch()

    return meetups
  }

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = MeetupController
