// Parte 1

// function verifica(string) {
//     let contrario = string.split('').reverse().join('');
//    if (contrario === string) {
//     return true;
//    } else {
//     return false;
//    }
// }
// console.log(verifica('caranguejo'));

// Parte 2

// function maiorValor(array) {
//     let indiceDoMaior = 0;
//     for (let indice in array) {
//         if (array[indiceDoMaior] < array[indice]) {
//             indiceDoMaior = indice;
//         }
//     }
//     return indiceDoMaior;
// }

// console.log(maiorValor([2, 3, 6, 7, 10, 1]));

// Parte 3 

// function menorValor(array) {
//     let indiceDoMenor = 0;
//     for (let indice in array) {
//         if (array[indiceDoMenor] > array[indice]) {
//             indiceDoMenor = indice;
//         }
//     }
//     return indiceDoMenor
// }

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// Parte 4 

// function caracteres(nomes) {
//     let caracteres = nomes[0];
//     for (let indice in nomes) {
//         if (caracteres.length < nomes[indice].length) {
//             caracteres = nomes[indice];
//         }
//     }
//  return caracteres;
// } console.log(caracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Parte 5

function maisRepete(numeros) {
    let numeroAtual = 0;
    let numRepeticoesAtual = 0;
    let maisRepetido = 0;
    let numRepeticoesMaisRepetido = 0;

    for (index = 0; index < numeros.length; index += 1) {
        numeroAtual = numeros[index];

        for (index2 = index + 1; index2 < numeros.length; index2 += 1) {
            if (numeros[index2] === numeroAtual) {
                numRepeticoesAtual += 1
            }
        }

        if (numRepeticoesAtual > numRepeticoesMaisRepetido) {
            numRepeticoesMaisRepetido = numRepeticoesAtual;
            maisRepetido = numeroAtual;
        }
    }
    return maisRepetido;
} console.log(maisRepete([2, 3, 2, 14, 5, 14, 8, 2, 3, 14, 14]));


//Parte 6

// function soma(numeroInteiro) {
//     let total = 0;
//     for (let index = 1; index <= numeroInteiro; index += 1) {
//         total = total + index;
//     }
//     return total;
// } console.log(soma(7));

//Parte 7

// function verificaFimPalavra (palavra, finalPalavra) {
//     palavra = palavra.split('');
//     finalPalavra = finalPalavra.split('');
//     let final = true;

//     for (let index = 0; index < finalPalavra.length; index += 1) {
//         if (palavra[palavra.length - finalPalavra.length + index] != finalPalavra[index]) {
//         final = false;
//     }
// }
// return final;
// }

// console.log(verificaFimPalavra('thawane', 'ane'));



