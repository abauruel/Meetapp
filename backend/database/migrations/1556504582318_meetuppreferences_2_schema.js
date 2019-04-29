'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Meetuppreferences2Schema extends Schema {
  async up () {
    const exists = this.hasTable('meetup_preference')
    if (!exists) {
      this.create('meetup_preference', table => {
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
  }

  down () {
    this.drop('meetuppreferences_2_s')
  }
}

module.exports = Meetuppreferences2Schema
