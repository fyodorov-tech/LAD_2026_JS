/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */
const stringToArray = str => str.split(" ");
const wordsArray = stringToArray("Welcome to Lad-academy!!!");
console.log(wordsArray);
