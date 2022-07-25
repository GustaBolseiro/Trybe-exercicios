// EXERCÍCIO 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [2, 4, 6, 8, 10];

let numberImpar = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 !== 0) {
        numberImpar ++;
    }    
}

if (numberImpar > 0) {
    console.log(numberImpar);
}else{
    console.log("Nenhum valor ímpar encontrado!");
}
