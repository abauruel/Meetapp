'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class File extends Model {
  meetup () {
    return this.belongsTo('App/Models/Meetup')
  }
}

module.exports = File
