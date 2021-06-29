/**********************************************************************
* 
* code_verification.js: recebe um código em G e verifica se o código
* pode ser executado ou nao.
*
***********************************************************************/
module.exports = function (gCode) {
    return gCode.match(/((#.*include.*)|(system)|(popen)|(fopen)|(fgets)|(execl))/g);
}
