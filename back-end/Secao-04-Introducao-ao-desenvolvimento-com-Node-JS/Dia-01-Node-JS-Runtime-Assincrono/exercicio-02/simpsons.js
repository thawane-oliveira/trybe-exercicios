const fs = require('fs').promises;

// async function readChara() {
//   const content = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(content);
//   const idName = simpsons.map(({ id, name }) => `${id} - ${name}`);
//   idName.forEach((string) => console.log(string));

//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }
//   return chosenSimpson;
// }


// async function getSimpsonById(id) {
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);
// }

// async function main() {
//   const simpson = await getSimpsonById(1);
//   console.log(simpson);
// }

// async function filterSimpsons() {
//   const fileContent = await fs
//    .readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);
//   const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

// await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// }

// function main() {
//   filterSimpsons();
// }

// main();

// async function createSimpsonsFamily() {
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const familyIds = [1, 2, 3, 4];
//   const simpsonsFamily = simpsons
//     .filter((simpson) => familyIds.includes(Number(simpson.id)));

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

// function main() {
//   createSimpsonsFamily();
// }

// async function addNelsonToFamily() {
//   const fileContent = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8');

//   const simpsonsFamily = JSON.parse(fileContent);

//   simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' })
// }

// function main() {
//   addNelsonToFamily();
// }

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}


function main() {
  replaceNelson(); 
}

main();


