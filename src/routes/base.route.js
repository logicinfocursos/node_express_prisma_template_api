// src\routes\base.route.js - (created by: logicinfo.com.br/ael)
import { Router } from 'express'
import ProductController from '../controllers/product.controller.js'
import CategoryController from '../controllers/category.controller.js'



export class BaseRoute {

  constructor(controller) {

    this.router = Router()
    this.controller = controller
    this.setupRoutes()

  }



  getAll = (request, response) => {
    
    this.controller.getAll(request, response)

  }



  getById = (request, response) => {

    this.controller.getById(request, response)

  }


  getListByKey = (request, response) => {

    this.controller.getListByKey(request, response)

  }



  create = (request, response) => {

    this.controller.create(request, response)

  }



  update = (request, response) => {

    this.controller.update(request, response)

  }



  erase = (request, response) => {

    this.controller.erase(request, response)

  }



  setupRoutes() {

    this.router.get('/', this.getAll)
    this.router.get('/:id?', this.getById)
    this.router.get("/:key?/:field?", this.getListByKey);
    this.router.post('/', this.create)
    this.router.put('/:id?', this.update)
    this.router.patch('/:id?', this.update)
    this.router.delete('/:id?', this.erase)
    
    this.router.get('/getProducts', ProductController.getProducts)
    this.router.get('/getProductById/:id?', ProductController.getProductById)
    this.router.get('/getProductByKey/:key?/:field?', ProductController.getProductByKey)
    this.router.get('/getProductsByKey/:key?/:field?', ProductController.getProductsByKey)

    this.router.get('/getCategories', CategoryController.getCategories)
  }  
}
