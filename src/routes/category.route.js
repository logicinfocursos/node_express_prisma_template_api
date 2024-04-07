// src\routes\category.route.js - (created by: logicinfo.com.br/ael)
import CategoryController from '../controllers/category.controller.js'
import { BaseRoute } from './base.route.js'



class CategoryRoute extends BaseRoute {

    constructor() {

        super(CategoryController)
        
    }

    getCategories = (request, response) => {

        CategoryController.getCategories(request, response)
    
      }
}

export default new CategoryRoute().router