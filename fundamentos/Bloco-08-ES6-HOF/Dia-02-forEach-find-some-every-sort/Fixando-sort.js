const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((pA, pB) => pA.age - pB.age);

console.log(people);


people.sort((pA, pB) => pB.age - pA.age);

console.log(people);