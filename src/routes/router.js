// src\routes\router.js - (created by: logicinfo.com.br/ael)
import { Router } from 'express'
import productRoute from './product.route.js'
import categoryRoute from './category.route.js'



const router = Router()

router.use('/product', productRoute)
router.use('/category', categoryRoute)

router.use('/getProducts', productRoute)
router.use('/getProductById', productRoute)
router.use('/getProductByKey', productRoute)
router.use('/getProductsByKey', productRoute)

router.use('/getCategories', categoryRoute)

export default router