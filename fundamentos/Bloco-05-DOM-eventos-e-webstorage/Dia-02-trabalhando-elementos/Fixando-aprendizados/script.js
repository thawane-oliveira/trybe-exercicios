// Exercicio 01

// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// const pai = elementoOndeVoceEsta.parentElement;
// pai.style.color = 'violet';

// const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho';

// const primeiroFilho = pai.firstElementChild;

// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// const texto = elementoOndeVoceEsta.nextSibling;

// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// Exercicio 02

// const pai = document.getElementById('pai');

// const irmaoElementoOndeVoceEsta = document.createElement('section');

// irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';

// pai.appendChild(irmaoElementoOndeVoceEsta);

// //

// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// const filhoElementoOndeVoceEsta = document.createElement('div');

// filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';

// elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// //

// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

// const filhoPrimeiroFilhoDoFilho = document.createElement('div');

// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';

// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// //

// const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
// console.log((terceiroFilho));


// // Exercicio 03

// const pai = document.getElementById('pai');

//     for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//       const currentChildren = pai.childNodes[index];
//       if (currentChildren.id !== 'elementoOndeVoceEsta') {
//         currentChildren.remove();
//       }
//     }

//     const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
//     segundoEUltimoFilhoDoFilho.remove();