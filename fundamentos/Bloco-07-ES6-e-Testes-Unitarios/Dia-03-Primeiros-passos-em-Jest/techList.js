function techList(tecnologia, nome) {
  tecnologia.sort();
  if (tecnologia.length <= 0) {
    return 'Vazio!';
  }
  let objeto = [];
  for (let index = 0; index < tecnologia.length; index += 1) {
    objeto.push({
      tech: tecnologia[index],
      name: nome });
  }
  return objeto;
}

module.exports = techList;
