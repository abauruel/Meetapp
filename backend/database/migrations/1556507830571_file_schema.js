'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', table => {
      table.increments()
      table
        .integer('meetup_id')
        .references('meetups.id')
        .notNullable()
        .unsigned()
      table.string('file').notNullable()
      table.string('name').notNullable()
      table.string('type')
      table.string('subtype')
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
