'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  users () {
    return this.belongsToMany('App/Models/Users').pivotModel(
      'App/Models/Inscription'
    )
  }
  preference () {
    return this.hasOne('App/Models/Preference')
  }
}

module.exports = Meetup
