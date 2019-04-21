'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserpreferenceSchema extends Schema {
  async up () {
    const exists = this.hasTable('user_preferences')

    if (!exists) {
      this.create('user_preferences', table => {
        table
          .integer('user_id')
          .unsigned()
          .references('users.id')
        table
          .integer('preference_id')
          .unsigned()
          .references('preferences.id')
        table.timestamps()
      })
    }
  }

  down () {
    this.drop('userpreferences')
  }
}

module.exports = UserpreferenceSchema
