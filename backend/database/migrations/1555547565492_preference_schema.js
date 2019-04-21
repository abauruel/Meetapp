'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PreferenceSchema extends Schema {
  async up () {
    const exists = await this.hasTable('preferences')
    if (!exists) {
      this.create('preferences', table => {
        table.increments()
        table.string('description')
        table.timestamps()
      })
    }
  }

  down () {
    this.drop('preferences')
  }
}

module.exports = PreferenceSchema
