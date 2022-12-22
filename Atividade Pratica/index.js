var quadrados = 1;
var pares = 0;
var impares = 0;

for (var i = 1; i <= 20; i++) {

    var cont = i * i;
    quadrados = cont * cont / cont;
    console.log(quadrados);

    if (i % 2 == 0) { 
        pares = pares + quadrados;
    } else {
        impares = impares + quadrados;
    }

}

console.log("A soma de quadrados pares: " + pares);
console.log("A soma de quadrados ímpares: " + impares);