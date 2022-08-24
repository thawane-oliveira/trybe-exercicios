const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   // escreva seu código aqui
// }

const containsA = names.reduce((acc, curr) => {
  curr.split('').forEach(letra => (letra === 'a' || letra === 'A') ? acc += 1 : acc);
  return acc;
}, 0);

console.log(containsA);