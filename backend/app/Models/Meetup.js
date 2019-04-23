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
  preference () {
    return this.hasOne('App/Models/Preference')
  }
}

module.exports = Meetup
