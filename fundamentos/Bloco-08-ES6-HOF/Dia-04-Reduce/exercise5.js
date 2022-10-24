const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   return names.reduce((acc, curr) => {
//     const word = curr.split('').forEach(word => word === 'a' || word === 'A') ? acc += 1 : acc;
//     return acc;
//   }, 0);
// }

const containsA = names.reduce((acc, curr) => {
    curr.split('').forEach(letra => (letra === 'a' || letra === 'A') ? acc += 1 : acc);
  return acc;
}, 0);

console.log(containsA);