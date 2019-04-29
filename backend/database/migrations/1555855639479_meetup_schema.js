'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetupSchema extends Schema {
  async up () {
    const exists = this.hasTable('meetups')
    if (!exists) {
      this.create('meetups', table => {
        table.increments()
        table.timestamps()
      })
    }
  }

  down () {
    this.drop('meetups')
  }
}

module.exports = MeetupSchema
