const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const newKey = (object, key, value) => {
  object[key] = value;
};

//

newKey(lesson2, 'turno', 'noite');
console.log(lesson2);

//

const listOfKeys = (object) => Object.keys(object);
console.log(listOfKeys(lesson1));

//

const objectSize = (object) => Object.keys(object).length;
console.log(objectSize(lesson1));

//

const valueList = (object) => Object.values(object);
console.log(valueList(lesson1));

//

const lessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(lessons);

//

const numberOfStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (index in keys) {
    total += object[keys[index]].numeroEstudantes;
  }
  return total;
};

console.log((numberOfStudents(lessons)));

//

const keyValue = (object, number) => Object.values(object) [number];
console.log(keyValue(lesson1, 0));

//

// const verifyPair = (object, key, value) => {
//   const values = Object.entries(object);
//   let 
// };
// console.log(verifyPair(lesson3, 'turno', 'noite'));

//

const mathStudents = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (index in array) {
    if(object[array[index]].materia === 'Matemática'){
    total += object[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(mathStudents(lessons));

//

const lessonAndStudent = (object, name) => {
  const lessons = [];
  let students = 0;
  const array = Object.values(object);
  for (index in array) {
    if (array[index].professor === name) {
      lessons.push(array[index].materia)
      students += array[index].numeroEstudantes;
    }
  }
  return { aulas: lessons, estudantes: students };
}

const relatorio = (lessons, name) => {
  const relacao = {};
  relacao.professor = name;
  Object.assign(relacao, lessonAndStudent(lessons, name));
  return relacao;
}
console.log(relatorio(lessons, 'Maria Clara'));