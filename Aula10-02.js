var num = 0;
var soma = 0;
var perfeitos = 0;

while (perfeitos < 3) {
    num++;
    soma = 0;
    for (let j = 1; j <= num - 1; j++) {
        if (num % j == 0) {
            soma = soma + j;
        }
    }
    if (soma == num) {
        console.log(num + " é um número perfeito!");
        perfeitos++;
    }
}



