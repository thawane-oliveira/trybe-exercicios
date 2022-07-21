// Exercicio 01

let idadeMarina = 33;
let idadeSilvia = 26;
let idadeIza = 24;

if (idadeMarina < idadeSilvia && idadeMarina < idadeIza) {
    console.log('Marina é a pessoa mais jovem e possui', idadeMarina, 'anos de idade');
} else if (idadeSilvia < idadeIza && idadeMarina) {
console.log('Silvia é a pessoa mais jovem e possui', idadeSilvia , 'anos de idade');
} else if (idadeIza < idadeMarina && idadeIza < idadeSilvia) {
    console.log('Iza é a pessoa mais jovem e possui', idadeIza , 'anos de idade');
}

// Exercicio 02

let taxaMetabolicaBasal = ['age', 'sex', 'height', 'weight'] 
let bmr;  

if ('sex' === "M") {
    bmr = 'height' * 6.25 + 'weight' * 9.99 - 'age' * 4.92 + 5
} else if ('sex' === "F") {
    bmr = 'height' * 6.25 + 'weight' * 9.99 - 'age' * 4.92 - 161
}

console.log("A taxa metabólica basal é" , bmr , "Kcal");


// Exercício 03

let menuOpcoes = '2 - McTrybe'; {

switch ('opção') 
{
    case 1:
      return "1 - Trybe Lanche Feliz";
      break;
    case 2:
      return "2 - McTrybe";
      break;
    case 3:
      return "3 - TrybeWooper";
      break;
    case 4:
      return "4 - X-Trybe";
      break;
    case 5:
      return "5 - Triplo Trybe com JS";
      break;
    default:
      return "Não temos esta opção ainda :(";
  }
}