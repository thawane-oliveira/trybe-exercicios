const wakeUp = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const goSleep = () => 'Partiu dormir!!';


const doingThings = (func) => {
  // const result = func();
  // console.log(result);
  console.log(func());
}


// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(coffee);
doingThings(goSleep);


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!