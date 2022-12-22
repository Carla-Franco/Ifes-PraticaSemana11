const prompt = require('prompt-sync')();

var maior = 0; 

do {

    var num = parseInt(prompt('Digite um número: '));

    if (num > maior) {
        maior = num;
    }

} while (num != 0);

console.log("Maior número: " + maior);

