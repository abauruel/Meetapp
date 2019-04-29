'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Meetuppreferences3Schema extends Schema {
  up () {
    this.create('meetup_preferences', table => {
      table
        .integer('meetup_id')
        .unsigned()
        .references('meetups.id')
      table
        .integer('preference_id')
        .unsigned()
        .references('preferences.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('meetuppreferences_3_s')
  }
}

module.exports = Meetuppreferences3Schema
