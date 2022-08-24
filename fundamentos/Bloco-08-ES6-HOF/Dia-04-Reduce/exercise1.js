const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// function flatten() {
//   // escreva seu código aqui
// }

const flatten = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten);

//estudado sobre concat na documentação