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