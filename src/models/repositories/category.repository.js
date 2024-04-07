// src\models\repositories\category.repository.js - (created by: logicinfo.com.br/ael)
import { BaseRepository } from "./base.repository.js"
import { prisma } from '../../services/prisma.js'

export class CategoryRepository extends BaseRepository {

    constructor(prismaModel = 'category') {

        super(prismaModel)
        this.prismaModel = prismaModel

    }

    async getCategories() {

        const result = await prisma[this.prismaModel].findMany({
            include: { products: true }
        })

        return result
    }
}