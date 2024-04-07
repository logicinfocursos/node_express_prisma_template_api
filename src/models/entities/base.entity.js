// src\models\entities\base.entity.js - (created by: logicinfo.com.br/ael)
export class BaseEntity {
    constructor(data) {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
        console.log(">>> BaseEntity - data: ", data)
    }
}