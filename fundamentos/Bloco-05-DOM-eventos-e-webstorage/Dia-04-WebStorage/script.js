function mudaCor(){
    const corDoFundo = document.querySelector('select').value;
    document.querySelector('body').style.backgroundColor = corDoFundo;
} 

document.querySelector('#mudaFundo').addEventListener('change', mudaCor)

//

function mudaCorTexto(){
    const corDaLetra = document.querySelector('#corTexto').value;
    document.querySelector('body').style.color = corDaLetra;
}
document.querySelector('#corTexto').addEventListener('change', mudaCorTexto)

//

function tamanhoFonte(){
    const tamanho = document.querySelector('#tamanhoFonte').value;
    document.querySelector('body').style.fontSize = tamanho;
}

document.querySelector('#tamanhoFonte').addEventListener('change', tamanhoFonte)

//

function espacamento(){
    const espaco = document.querySelector('#espacoLinha').value;
    document.querySelector('p').style.lineHeight = espaco;
}
document.querySelector('#espacoLinha').addEventListener('change', espacamento)