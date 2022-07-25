// EXERCÍCIO 3
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resul = 0;

for (let i = 0; i < numbers.length; i++) {
    resul += (numbers[i]);
}
let media = (resul / numbers.length);

console.log("Total:", resul);
console.log("Média aritimética:", media);
