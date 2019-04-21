'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InscriptionsSchema extends Schema {
  up () {
    this.create('inscriptions', table => {
      table.increments()
      table
        .integer('meetup_id')
        .unsigned()
        .notNullable()
        .references('meetups.id')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('inscriptions')
  }
}

module.exports = InscriptionsSchema
