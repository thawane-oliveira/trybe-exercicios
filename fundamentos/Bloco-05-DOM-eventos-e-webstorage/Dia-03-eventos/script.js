function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

 // Exercicio 01
 
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criaDiasDoMes() {
    let lista = document.querySelector('#days');
    
    for (let index = 0; index < decemberDaysList.length; index += 1) {

        let dia = decemberDaysList[index];
        let diaFeature = document.createElement('li');
        diaFeature.innerHTML = dia;

        if (dia === 24 || dia === 31) {
            diaFeature.className = 'day holiday';
            lista.appendChild(diaFeature);
        } else if (dia === 4 || dia === 11 || dia === 18) {
           diaFeature.className = 'day friday';
           lista.appendChild(diaFeature);
        } else if (dia === 25) {
            diaFeature.className = 'day holiday friday';
            lista.appendChild(diaFeature);
        } else {
            diaFeature.className = 'day';
            lista.appendChild(diaFeature);
        }
    } 
  } 
  criaDiasDoMes();

// Exercicio 02

function criaFeriado(nomeDoBotao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let novoBotaoID = 'botao-feriado';

  novoBotao.innerHTML = nomeDoBotao;
  novoBotao.id = 'botao-feriado';

  buttonContainer.appendChild(novoBotao);
} criaFeriado('Feriados');

// Exercicio 03

function clicaFeriado() {
  let botaoFeriado = document.querySelector('#botao-feriado');
  let arrayFeriados = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = 'yellowgreen';

  botaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < arrayFeriados.length; index += 1) {
      if (arrayFeriados[index].style.backgroundColor === novaCor) {
        arrayFeriados[index].style.backgroundColor = backgroundColor;
      } else {
        arrayFeriados[index].style.backgroundColor = novaCor;
      }
    }
  });
} clicaFeriado();

// Exercicio 04

function botaoSextaFeira(nomeDoBotao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let novoBotaoID = 'btn-friday';

  novoBotao.innerHTML = nomeDoBotao;
  novoBotao.id = novoBotaoID;
  buttonContainer.appendChild(novoBotao);
} botaoSextaFeira('Sexta-feira');

// Exercicio 05

function sextas(arraySexta) {
  let capturaSexta = document.querySelector('#btn-friday');
  let todasSextas = document.getElementsByClassName('friday');
  let novoTexto = 'Rolo compressor';

  capturaSexta.addEventListener('click', function() {
   for (let index = 0; index < todasSextas.length; index += 1) {
    if (todasSextas[index].innerHTML !== novoTexto) {
      todasSextas[index].innerHTML = novoTexto;
    } else {
      todasSextas[index].innerHTML = arraySexta[index];
    }
   }
  });
} let sextasDezembro = [4, 11, 18, 25];
sextas(sextasDezembro);