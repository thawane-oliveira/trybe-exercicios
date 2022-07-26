// Bônus 02

// const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {
//     const resultado = [];
//     for (let index = 0; index < vector.length; index += 1) {
//         const number = vector[index];
//     for (let index2 = 0; index2 < number.length; index2 += 1) {
//         const atual = number[index2];

//         if ((atual % 2) === 0) {
//             resultado.push(atual);
//         }
//     }
//     }
//     return resultado;
// } console.log(arrayOfNumbers(vector));


// Bônus 03

// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];
//   const resultado = {};

//   for (let index = 0; index < basket.length; index += 1) {
//     const fruta = basket[index];
//     if (!resultado[fruta]) resultado[fruta] = 0;
//     resultado[fruta] += 1;
//   }
//   console.log(resultado);

//   const array = [];
//     for (fruta in resultado) {
//         let mensagem = `${resultado[fruta]} ${fruta}`;
//         if (resultado[fruta] > 1) mensagem += 's';
//         array.push(mensagem);
//   } 
//   console.log(`Sua cesta possui: ' ${array.join(', ')}.`);

// Bônus 04

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

//  Bônus 4.1
 
//  for (key in moradores) {
//     console.log("O morador do bloco 2 de nome " + moradores.blocoDois[1].nome, moradores.blocoDois[1].sobrenome + "mora no " + moradores.blocoDois[1].andar + "º andar, apartamento " + moradores.blocoDois[1].apartamento + ".");
//   }

// Bônus 4.2

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
  }

  for (let index = 0; index < moradores.blocoDois.length; index+= 1) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
  }