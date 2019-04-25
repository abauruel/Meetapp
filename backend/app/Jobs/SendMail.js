'use strict'
const Mail = use('Mail')
const moment = require('moment')
class SendMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'SendMail-job'
  }

  async handle ({ email, name, title, data, local }) {
    console.log(`job ${SendMail.key}`)

    await Mail.send(
      ['emails.InscriptionConfirmation'],
      {
        username,
        title,
        data,
        local
      },
      message => {
        message
          .to(email)
          .from('abauruel@gmail.com')
          .subject('Confirmação de inscrição')
      }
    )
  }
}

module.exports = SendMail
