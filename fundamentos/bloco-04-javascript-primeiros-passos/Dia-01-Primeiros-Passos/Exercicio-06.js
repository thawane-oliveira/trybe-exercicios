const entrada = 'cAvaLO';

const entradaAlinhada = entrada.toLowerCase();

if (entradaAlinhada === 'bispo') {
    console.log('Diagonal');
}
else if (entradaAlinhada === 'cavalo') {
    console.log('Anda em L');
}

else if (entradaAlinhada === 'torre') {
    console.log('Horizontal e vertical');
}

else if (entradaAlinhada === 'peao') {
    console.log('Uma casa pra frente');
}

else if (entradaAlinhada === 'rainha') {
    console.log('Diagonal, horizontal e vertical');
}

else if (entradaAlinhada === 'rei') {
    console.log('Uma casa em qualquer direção');
}

else console.log("Erro, peça não encontrada");
