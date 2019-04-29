'use strict'
const Helpers = use('Helpers')
const File = use('App/Models/File')
class FileController {
  async store ({ request, response }) {
    try {
      const upload = request.file('file', { size: '2mb' })
      const { meetup_id } = request.only(['meetup_id'])
      console.log(meetup_id)
      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), { name: fileName })
      if (!upload.moved()) {
        throw upload.error()
      }
      console.log(`${upload.clientName}, ${meetup_id.data}`)
      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype,
        meetup_id: meetup_id
      })
      return file
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Algo deu errado' } })
    }
  }
  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = FileController
