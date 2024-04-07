/*********************************************************************** 
    src\functions\getRandomIntNumber.js - (created by: logicinfo.com.br/ael)

    getRandomIntNumber: gerar um número aleatório inteiro entre o 
    min e máx recebido
***********************************************************************/
export const getRandomIntNumber = (min, max) => {

    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min

}