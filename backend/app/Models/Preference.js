'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Preference extends Model {
  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/UserPreference'
    )
  }

  meetups () {
    return this.belongsTo('App/Models/Meetup')
  }
}

module.exports = Preference
