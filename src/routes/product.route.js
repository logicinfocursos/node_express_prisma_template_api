// src\routes\product.route.js - (created by: logicinfo.com.br/ael)
import ProductController from '../controllers/product.controller.js'
import { BaseRoute } from './base.route.js'



class ProductRoute extends BaseRoute {

  constructor() {

    super(ProductController)
    
  }



  getProducts = (request, response) => {

    ProductController.getProducts(request, response)

  }



  getProductById = (request, response) => {

    ProductController.getProductById(request, response)

  }



  getProductByKey = (request, response) => {

    ProductController.getProductByKey(request, response)

  }



  getProductsByKey = (request, response) => {

    ProductController.getProductsByKey(request, response)

  }

}

export default new ProductRoute().router
