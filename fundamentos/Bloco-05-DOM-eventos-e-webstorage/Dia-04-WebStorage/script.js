window.onload = function(){function mudaCor(){
    let corDoFundo = document.querySelector('#mudaFundo').value;
    document.querySelector('body').style.backgroundColor = corDoFundo;
    localStorage.setItem("backgroundColor", corDoFundo);
} 

document.querySelector('#mudaFundo').addEventListener('change', mudaCor)

//

function mudaCorTexto(){
    let corDaLetra = document.querySelector('#corTexto').value;
    document.querySelector('body').style.color = corDaLetra;
    localStorage.setItem("fontColor", corDaLetra);
}
document.querySelector('#corTexto').addEventListener('change', mudaCorTexto)

//

function tamanhoFonte(){
    let tamanho = document.querySelector('#tamanhoFonte').value;
    document.querySelector('body').style.fontSize = tamanho;
    localStorage.setItem("fontSize", tamanho);
}

document.querySelector('#tamanhoFonte').addEventListener('change', tamanhoFonte)

//

function espacamento(){
    let espaco = document.querySelector('#espacoLinha').value;
    document.querySelector('body').style.lineHeight = espaco;
    localStorage.setItem("lineHeight", espaco);
}
document.querySelector('#espacoLinha').addEventListener('change', espacamento)

//

function style(){
    let estilo = document.querySelector('#tipoFonte').value;
    document.querySelector('body').style.fontFamily = estilo;
    localStorage.setItem("fontStyle", estilo);
}
document.querySelector('#tipoFonte').addEventListener('change', style)

//

function recuperandoDados(){
    let corDoFundoSalva = localStorage.getItem("backgroundColor");
    let body = document.querySelector('body');
    body.style.backgroundColor = corDoFundoSalva;

        let corDaLetraSalva = localStorage.getItem("fontColor");
        body.style.color = corDaLetraSalva;

        let tamanhoSalvo = localStorage.getItem("fontSize");
        body.style.fontSize = tamanhoSalvo;

        let espacoSalvo = localStorage.getItem("lineHeight");
        body.style.lineHeight = espacoSalvo;

        let estiloSalvo = localStorage.getItem("fontStyle");
        body.style.fontFamily = estiloSalvo;
} recuperandoDados();
}

