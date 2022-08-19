const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (answerKey, studentAnswer) => {
  if (answerKey === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  } return -0.5;
};

// const count = (answerKey, studentAnswer) => {
//   let finalGrade = 0;
//   for (let index = 0; index < answerKey.length; index += 1) {}
// }

const returnGrade = (answerKey, studentAnswer, count) => {
  let correction = 0;
  for (let index = 0; index < answerKey.length; index += 1) {
    const finalGrade = count(answerKey[index], studentAnswer[index]);
    correction += finalGrade;
  } return `Resultado final: ${correction} pontos.`
}

console.log(returnGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, verify));