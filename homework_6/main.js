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
// const getFirstChars = str => str.split(/\s+/).map(word => word[0]);

// const str =
//   "Напишите код, создающий массив, который будет состоять из первых букв слов строки str";
// console.log(getFirstChars(str));

/* 5. Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. */
// const getArr = str => {
//   let arr = [];

//   for (let i = 1; i < str.length - 1; i++) {
//     arr.push(str[i - 1] + str[i] + str[i + 1]);
//   }

//   return arr;
// };

// const str = "abcdef";
// console.log(getArr(str));

/* 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений. */
// const orderByDesc = arr => arr.sort((a, b) => b - a);

// const numbers = [22, 4, 31, -8, 13, 1];
// console.log(orderByDesc(numbers));

/* 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел. */
// const getOrderedDescStr = (firstArr, secondArr, thirdArr) =>
//   [...firstArr, ...secondArr, ...thirdArr].sort((a, b) => b - a).join(" ");

// const firstArr = [22, 4, 31, -8, 13, 1];
// const secondArr = [81, -1, -9, 9, 15];
// const thirdArr = [-99, 0, -18, -28, 70];

// console.log(getOrderedDescStr(firstArr, secondArr, thirdArr));

/* 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */
// const sumArr = arr => arr.flat().reduce((acc, cur) => acc + cur, 0);

// const arr = [[1, 2, 3], [4, 5], [6]];
// console.log(sumArr(arr));

/* 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. */
// const reverseArr = arr => {
//   const reversedArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// };

// const arr = [22, 4, 31, -8, 13, 1];
// console.log(reverseArr(arr));

/* 10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */
const countSumMoreTen = arr => {
  //Можно через reduce, но он не позволяет прервать выполнение, поэтому цикл может быть эффективнее
  let count = 0;
  let sum = 0;

  for (const el of arr) {
    count++;
    sum += el;

    if (sum > 10) {
      return count;
    }
  }

  return count;
};

const numbers = [4, 22, 31, -8, 13, 1];
console.log(countSumMoreTen(numbers));
