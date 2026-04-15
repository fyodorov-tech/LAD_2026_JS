/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */
// const stringToArray = str => str.split(" ");
// const wordsArray = stringToArray("Welcome to Lad-academy!!!");
// console.log(wordsArray);

/* 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */
const deleteCharacters = (str, length) => str.substr(0, length);
const str = "You don't know JS";
console.log(deleteCharacters(str, 5));
