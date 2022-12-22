// x = 10;
// while (!(x == 0)) {
//   x = x - 1;
//   if (x % 2 != 0) {
//     console.log(x);
//   }
// }

// for (let cont = 0; cont <= 10; cont++) {
//     console.log(cont, "Olá mundo!");
//   }

// const prompt = require("prompt-sync")();
// terminou = false;
// p = i = 0;
// while (!terminou) {
//   n = parseInt(prompt("Digite um número, ou zero para terminar: "));
//   if (n == 0) {
//     terminou = true;
//   } else {
//     if (n % 2 == 0) {
//       p = p + 1;
//     } else {
//       i = i + 1;
//     }
//   }
// }
// console.log("P = ", p);
// console.log("I = ", i);

// i = 0;
// while (i < 3) {
//   j = 0;
//   while (j < 3) {
//     console.log(3 * i + j + 1);
//     j = j + 1;
//   }
//   i = i + 1;
// }

// for (x = 2; x >= 0; x = x - 1) {
//     for (y = 0; y <= 4; y = y - 1) {
//       console.log("Instrução");
//     }
//   }

x = 1;
cont = 0;
while (x < 3) {
  y = 0;
  while (y <= 4) {
    console.log("Instrução");
    y = y + 1;
  }
  x = x + 1;
}