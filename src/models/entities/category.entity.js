// src\models\entities\category.js - (created by: logicinfo.com.br/ael)
import { BaseEntity } from './base.entity.js'


export class Category extends BaseEntity {

    constructor(id, name, created_at, updated_at) {
        this.id = id
        this.name = name
        this.created_at = created_at
        this.updated_at = updated_at
    }
}

