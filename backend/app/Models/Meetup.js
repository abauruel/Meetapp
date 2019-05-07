'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  static scopeMeetupResume (query) {
    return query
      .innerJoin('files', 'meetups.id', 'files.meetup_id')
      .rightJoin('inscriptions', 'meetups.id', 'inscriptions.meetup_id')
      .groupBy('meetups.title')
      .select('meetups.id', 'meetups.title', 'files.file')
  }
  static scopeMeetupPivotCount (query) {
    return query.has('users').count
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
