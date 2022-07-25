// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// Parte 1

// console.log('Bem-vinda, ' + info.personagem);

// Parte 2 

// info['recorrente'] = "Sim";

// console.log(info.recorrente);

// Parte 3 

// for (key in info) {
//     console.log(key);
// }

// // Parte 4

// for (key in info) {
//     console.log(info[key]);
// }

// Parte 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: "Sim"
// };

// for (key in info) {
//     if (key === 'recorrente' && info[key] ==='Sim' && info2[key]==='Sim') {
//         console.log('Ambos recorrentes')
//     } else {
//         console.log(info[key] + ' e ' + info2[key]);
//     }
// }

// Parte 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  for (key in leitor) {
    console.log("O livro favorito de " + leitor.nome,leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo + ".");
  }


//   Parte 7


  leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );

// Parte 8

for (key in leitor) {
    console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");
}