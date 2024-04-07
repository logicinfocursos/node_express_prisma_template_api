// src\controllers\product.controller.js - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller.js'
import { ProductRepository } from '../models/repositories/product.repository.js'



class ProductController extends BaseController {

  constructor() {

    const prismaModel = 'product'
    const repository = new ProductRepository()

    super(prismaModel, repository)

    this.repository = repository
  }



  async getProducts(_, response) {

    try {

      const result = await this.repository.getProducts()

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getProductById(request, response) {

    try {
      const { id } = request.params

      const result = await this.repository.getProductById(Number(id))

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }



  async getProductByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getProductByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }



  async getProductsByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getProductsByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }

}

export default new ProductController()