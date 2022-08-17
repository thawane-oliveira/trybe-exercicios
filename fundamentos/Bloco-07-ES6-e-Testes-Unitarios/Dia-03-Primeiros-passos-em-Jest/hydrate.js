function hydrate(string) {
  let sugestao = string.split(/(\d)/);
  let contagem = 0;
  for (let index = 0; index < sugestao.length; index += 1) {
    if (sugestao[index].length <= 1) {
      let copo = Number(sugestao[index]);
      contagem += copo;
    }
  }
  if (contagem === 1) {
    return `${contagem} copo de água`;
  } return `${contagem} copos de água`;
}

module.exports = hydrate;