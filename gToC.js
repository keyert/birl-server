/**********************************************************************
* 
* gToC.js: recebe um código em G e retorna o mesmo traduzido
* para C.
*
***********************************************************************/
module.exports = function (gCode) {
    // A tradução é feita com um simples replace no código G com o seu respectivo valor
    //em C, a regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro
    //de aspas.
    var code = gCode;

    if (code == null) return "";

    //Traduzindo a MAIN
    code = code.replace(/(GALAXIA)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {'); 
    //Traduzindo FECHAR BLOCO
    code = code.replace(/(FECHAVERSO)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(HOUSTON, RESPONDA[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(OLHA A LUZ[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(SE[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(SENAO)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //Traduzindo else if
    code = code.replace(/(SENAO SE[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(ENQUANTO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(PARA)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(SISTEMA*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(ASTRO)(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(CHAMAR)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    //Traduzindo parada no código
    code = code.replace(/(PARAR)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //Traduzindo continuar o código
    code = code.replace(/(CONTINUAR)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');

    //Traduzindo os tipos de dados
    code = code.replace(/(SATELITE)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(ASTEROIDE)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(METEORITO)(?=(?:[^"]|"[^"]*")*$)/g, 'short');
    code = code.replace(/(COMETA)(?=(?:[^"]|"[^"]*")*$)/g, 'long');
    code = code.replace(/(ESTRELA)(?=(?:[^"]|"[^"]*")*$)/g, 'double');
    code = code.replace(/(PLANETA)(?=(?:[^"]|"[^"]*")*$)/g, 'float');
    code = code.replace(/(SEM SINAL DE)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    console.log ('-----------------------------------------');
    console.log ('CODIGO GERADO:');
    console.log (code);
    console.log ('-----------------------------------------');

    return code;
}
