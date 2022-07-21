const compra = 80;
const custo = compra * 1.2;
const venda = 120;
const lucro = (venda - custo) * 1000;

if (lucro >=0) {
    console.log(lucro);
}

else if (custo < 0 || venda < 0) {
    console.log("Erro: Valor não pode ser inferior a zero");
}