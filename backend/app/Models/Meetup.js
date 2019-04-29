'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  static getCount () {
    return this.users().getCount()
  }
  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/Inscription'
    )
  }
  preferences () {
    return this.belongsToMany('App/Models/Preference').pivotModel(
      'App/Models/MeetupPreference'
    )
  }
  files () {
    return this.hasOne('App/Models/File')
  }
}

module.exports = Meetup
