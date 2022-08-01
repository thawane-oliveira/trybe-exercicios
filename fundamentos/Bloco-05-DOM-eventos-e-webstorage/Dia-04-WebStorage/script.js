function mudaCor(){
    const corDoFundo = document.querySelector('#mudaFundo').value;
    document.querySelector('body').style.backgroundColor = corDoFundo;
    localStorage.setItem("backgroundColor", corDoFundo);
} 

document.querySelector('#mudaFundo').addEventListener('change', mudaCor)

//

function mudaCorTexto(){
    const corDaLetra = document.querySelector('#corTexto').value;
    document.querySelector('body').style.color = corDaLetra;
    localStorage.setItem("fontColor", corDaLetra);
}
document.querySelector('#corTexto').addEventListener('change', mudaCorTexto)

//

function tamanhoFonte(){
    const tamanho = document.querySelector('#tamanhoFonte').value;
    document.querySelector('body').style.fontSize = tamanho;
    localStorage.setItem("fontSize", tamanho);
}

document.querySelector('#tamanhoFonte').addEventListener('change', tamanhoFonte)

//

function espacamento(){
    const espaco = document.querySelector('#espacoLinha').value;
    document.querySelector('body').style.lineHeight = espaco;
    localStorage.setItem("lineHeight", espaco);
}
document.querySelector('#espacoLinha').addEventListener('change', espacamento)

//

function style(){
    const estilo = document.querySelector('#tipoFonte').value;
    document.querySelector('body').style.fontFamily = estilo;
    localStorage.setItem("fontStyle", estilo);
}
document.querySelector('#tipoFonte').addEventListener('change', style)

