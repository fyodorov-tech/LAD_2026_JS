/* 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины. */
// const getLength = arr => arr.map(e => e.length);

// const myArray = ["backend", "frontend", "mobile", "game"];
// console.log(getLength(myArray));

/* 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно. */
// const currentSums = arr =>
//   arr.reduce((acc, cur, index) => {
//     acc.push(index === 0 ? cur : acc[index - 1] + cur);
//     return acc;
//   }, []); // Не понимал зачем тут использовать reduce. Казалось он тут не уместен. Пришлось обратиться к нейронке, чтобы понять как тут reduce можно использовать

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// console.log(currentSums(numbers));

/* 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д. */
// const getEqualsSeven = arr => {
//   arr.sort((a, b) => a - b);

//   let includedNumbers = [];
//   let resultArr = [];

//   for (const el of arr) {
//     if (
//       arr.includes(7 - el) &&
//       !includedNumbers.includes(el) &&
//       !includedNumbers.includes(7 - el)
//     ) {
//       includedNumbers.push(el, 7 - el);
//       resultArr.push(`(${el}:${7 - el})`);
//     }
//   }

//   return resultArr;
// };

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(getEqualsSeven(numbers));

/* 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str. */
const getFirstChars = str => str.split(/\s+/).map(word => word[0]);

const str =
  "Напишите код, создающий массив, который будет состоять из первых букв слов строки str";
console.log(getFirstChars(str));
