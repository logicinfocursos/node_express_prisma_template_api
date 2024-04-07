/*********************************************************************** 
    src\functions\getcode.js  - (created by: logicinfo.com.br/ael)

    getcode: gerar um código com o tamanho definido em 'codeLength', 
    podendo ainda receber um prefix e/ou sufix
***********************************************************************/
import { getRandomIntNumber } from './getRandomIntNumber.js'



export const getcode = (codeLength = 5, prefix = '', sufix = '') => {

    const characters = '0123456789abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let code = ''

    for (let i = 0; i < codeLength; i++)
        code = code + characters.substr(getRandomIntNumber(0, characters.length), 1)
     
    if (prefix !== '') code = prefix + code

    if (sufix !== '') code = code + sufix

    return code

}
