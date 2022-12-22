const prompt = require('prompt-sync')();

var num = parseInt(prompt('Digite um número: '));

var divisores = 0;
var quant = 0;

for (let i = 1; i <= num; i++) {
    divisores = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        quant++;
    }
}

console.log("A quantidade de números primos é: " + quant);

