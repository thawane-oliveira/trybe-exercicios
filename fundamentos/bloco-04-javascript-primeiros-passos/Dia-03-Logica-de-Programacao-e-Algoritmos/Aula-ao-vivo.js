// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
// const numero = 50;
// let soma = 0;

// for (let index = 1; index <= n; index += 1) {
//     soma += 1;
// } console.log(soma);


// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// const n = 150;
// let divisiveis = 0;

// for (let index = 2; index <= n; index += 1){
//     if(index % 3 === 0){
//         divisiveis += 1;
//     }
// }
//  if (divisiveis === 50) {
//     console.log("Mensagem secreta.");
//  } else {
//     console.log(divisiveis + "divisiveis por " + n);
//  }

// 3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.

// let pessoaX = 12;
// let pessoaY = 13;
// let pessoaZ = 10;
// let menorIdade;
// let pessoa;

// let pessoas = ['pessoaX', 'pessoaY', 'pessoaZ'];

// for (let index = 0; index < pessoas.length; index += 1){
//    if (menorIdade > pessoas[index]){
//     menorIdade = pessoas[index];
//    }
// }

// if (pessoaX < pessoaY && pessoaX < pessoaZ){
//     menorIdade = pessoaX;
//     pessoa = "X";
// } else if (pessoaY < pessoaX && pessoaY < pessoaZ) {
//     menorIdade = pessoaY;
//     pessoa = "Y";
// } else {
//     menorIdade = pessoaZ;
//     pessoa = "Z";
// }

// console.log("Pessoa" + pessoa + "é a mais nova.");