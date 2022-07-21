let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 01

// for (let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

// // Exercicio 02

// let soma = 0;
// for (let index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index];
// }     console.log(soma);

// // Exercicio 03

// let media = soma/numbers.length;
// console.log(media);

// //Exercicio 04

// if (media > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

//Exercicio 05

// let maior = numbers[0];

// for (let index = 1; index < numbers.length; index += 1 ) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];
//     }
// }
// console.log(maior);

// Exercicio 06

let odd = 0;
for (let index = 1; index < numbers.length; index += 1 ) {
    if (numbers[index] % 2 !==0) {
        odd +=1;
    }
}
 if (odd === 0) {
    console.log('Nenhum valor ímpar encontrado');
 } else {
    console.log(odd);
 }