// EXERCÍCIO 2
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resul = 0;

for (let i = 0; i < numbers.length; i++) {
    resul += (numbers[i]);
}

console.log("A soma de todos os elementos do Array 'numbers' é igual a:", resul);
