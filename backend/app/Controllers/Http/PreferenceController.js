'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with preferences
 */
const Preference = use('App/Models/Preference')
class PreferenceController {
  async index ({ request, response, view }) {
    const preferences = await Preference.all()

    return preferences
  }

  async store ({ request, response }) {
    const data = request.only(['description'])

    const preferences = await Preference.create(data)

    return preferences
  }

  async show ({ params, request, response, view, auth }) {
    const preferences = await auth.user
      .preferences()
      .where('id', params.id)
      .first()
    return preferences
  }

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = PreferenceController
