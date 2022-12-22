const prompt = require('prompt-sync')();

var soma = 0;

do {

    var num = parseInt(prompt('Digite um número: '));
    var decisao = prompt('Deseja continuar? (s/n): ');

    soma = soma + num;

} while (decisao == 's' || decisao == 'S');

console.log("Soma: " + soma);