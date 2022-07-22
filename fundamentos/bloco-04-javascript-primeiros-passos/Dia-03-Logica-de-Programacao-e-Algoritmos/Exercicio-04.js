// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
        if (numeroAtual % divisor === 0) {
            primo = false;
        }
}
 if (primo) {maiorPrimo = numeroAtual;
 }
}

console.log(maiorPrimo);
