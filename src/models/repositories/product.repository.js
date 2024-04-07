// src\models\repositories\product.repository.js - (created by: logicinfo.com.br/ael)
import { BaseRepository } from "./base.repository.js"
import { prisma } from '../../services/prisma.js'

export class ProductRepository extends BaseRepository {

    constructor(prismaModel = 'product') {

        super(prismaModel)
        this.prismaModel = prismaModel

    }

    async getProducts() {

        const result = await prisma[this.prismaModel].findMany({
            include: { category: true }
        })

        return result
    }

    async getProductById(id) {

        const result = await prisma[this.prismaModel].findUnique({
            where: { id },
            include: { category: true }
        })

        return result
    }

    async getProductByKey(key, field) {

        let whereClause = {}

        whereClause[field] = {
            contains: key,
        }

        const result = await prisma[this.prismaModel].findFirst({
            where: whereClause,
            include: { category: true }
        })

        return result
    }

    async getProductsByKey(key, field) {

        whereClause[field] = {
            contains: key,
        }

        const result = await prisma[this.prismaModel].findMany({
            where: whereClause,
            include: { category: true }
        })

        return result
    }
}