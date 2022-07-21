// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 01


// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);

// Exercicio 02

// for (let index = 1; index < numbers.length; index += 1) {
//         for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//           if (numbers[index] > numbers[secondIndex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//           }
//         }
//       }
    
//     console.log(numbers);

// Exercicio 03

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array2 = [];

for (let index = 0; index < numbers.length; index += 1) {
   if (index + 1 < numbers.length) {
    array2.push(numbers[index] * numbers[index +1]);
   } else {
    array2.push(numbers[index] * 2);
   }
}

console.log(array2);