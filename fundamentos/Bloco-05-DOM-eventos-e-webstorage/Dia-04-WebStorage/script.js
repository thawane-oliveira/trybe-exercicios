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