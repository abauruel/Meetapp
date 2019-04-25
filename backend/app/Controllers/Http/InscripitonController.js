'use strict'
const Meetup = use('App/Models/Meetup')
const Kue = use('Kue')
const Job = use('App/Jobs/SendMail')
const moment = use('moment')
class InscripitonController {
  async store ({ request, auth, params }) {
    const meetup = await Meetup.findOrFail(params.id)
    await meetup.users().attach(auth.user.id)
    Kue.dispatch(
      Job.key,
      {
        name: auth.user.name,
        title: meetup.title,
        data: moment(meetup.date).format('DD/MM/YYYY'),
        local: meetup.location,
        email: auth.user.email
      },
      { attempts: 3 }
    )

    return meetup
  }
  async update ({ auth, params }) {
    const meetup = await Meetup.findOrFail(params.id)
    await meetup.users().detach(auth.user.id)
    meetup.users = await meetup.users().fetch()

    return meetup
  }
}

module.exports = InscripitonController
