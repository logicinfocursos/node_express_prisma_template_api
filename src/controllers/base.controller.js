// src\controllers\base.controller.js - (created by: logicinfo.com.br/ael)


export class BaseController {

  constructor(prismaModel, repository) {

    this.prismaModel = prismaModel
    this.repository = repository

    this.entity = prismaModel.charAt(0).toUpperCase() + prismaModel.slice(1)
  }



  async getAll(_, response) {

    try {

      const result = await this.repository.getAll()
      const objectList = this.mapOjects(result)

      response.status(200).send(objectList)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getById(request, response) {

    try {

      const result = await this.repository.getById(Number(request.params.id))
      const object = this.mapOjects(result)

      response.status(200).send(object)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getListByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getListByKey(key, field)
      const objectList = this.mapOjects(result)

      response.status(200).send(objectList)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async create(request, response) {

    try {

      const result = await this.repository.create(request.body)
      const object = this.mapOjects(result)

      response.status(201).send(object)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async update(request, response) {

    try {
      const result = await this.repository.update(Number(request.params.id), request.body)
      const object = this.mapOjects(result)

      response.status(200).send(object)


    } catch (e) {

      response.status(400).send(e)

    }
  }



  async erase(request, response) {

    try {
      const result = await this.repository.erase(Number(request.params.id))

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }


  mapOjects(result) {
    if (Array.isArray(result)) {
      return result.map((object) => {
        let newObject = {}
        Object.keys(object).forEach((key) => {
          newObject[key] = object[key]
        })
        return newObject
      })
    } else {
      let newObject = {}
      Object.keys(result).forEach((key) => {
        newObject[key] = result[key]
      })
      return newObject
    }
  }

  mapEntity(data) {

    for (let key in data) {

      if (data.hasOwnProperty(key)) {
        key = data[key]
      }

    }
  }
}
