const substituaX = (name) => {
  const frase = 'Tryber x aqui!';
  const fraseNova = frase.split('');
  for (let index = 0; index < fraseNova.length; index += 1) {
    if (fraseNova[index] === 'x') {
      fraseNova[index] = name;
    }
  }
  return fraseNova.join('');
};

const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JS'];
  let result = `${func} Minhas três principais habilidades são:`;

  for (let index = 0; index < skills.length; index += 1) {
    result = `${result} ${skills[index]},`;
  }
  return result;
};

console.log(minhasSkills(substituaX('Bebeto')));
