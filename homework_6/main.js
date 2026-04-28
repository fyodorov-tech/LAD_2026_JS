/* 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины. */
// const getLength = arr => arr.map(e => e.length);

// const myArray = ["backend", "frontend", "mobile", "game"];
// console.log(getLength(myArray));

/* 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно. */
const currentSums = arr =>
  arr.reduce((acc, cur, index) => {
    acc.push(index === 0 ? cur : acc[index - 1] + cur);
    return acc;
  }, []); // Не понимал зачем тут использовать reduce. Казалось он тут не уместен. Пришлось обратиться к нейронке, чтобы понять как тут reduce может быть уместен

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(currentSums(numbers));
