// src\models\repositories\base.repository.js - (created by: logicinfo.com.br/ael)
import { prisma } from '../../services/prisma.js'
import { getcode } from '../../functions/getcode.js'



export class BaseRepository {

    constructor(prismaModel) {

        this.prismaModel = prismaModel

    }



    async getAll() {

        const result = await prisma[this.prismaModel].findMany({})

        return result
    }



    async getById(id) {

        const result = await prisma[this.prismaModel].findUnique({
            where: { id }
        })

        return result
    }



    async getListByKey(key, field) {

        let whereClause = {}

        whereClause[field] = {
            contains: key,
        }

        const result = await prisma[this.prismaModel].findMany({
            where: whereClause,
        })

        return result
    }



    async create(data) {

        if (data && (!data.code || data.code === '')) data.code = getcode(6, this.prismaModel.substring(0, 3))

        const result = await prisma[this.prismaModel].create({
            data
        })

        return result
    }



    async update(id, data) {

        const result = await prisma[this.prismaModel].update({
            where: { id },
            data
        })

        return result
    }



    async erase(id) {

        const result = await prisma[this.prismaModel].delete({
            where: { id }
        })

        return result
    }
}