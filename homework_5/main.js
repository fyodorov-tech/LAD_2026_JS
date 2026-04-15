/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */
// const stringToArray = str => str.split(" ");
// const wordsArray = stringToArray("Welcome to Lad-academy!!!");
// console.log(wordsArray);

/* 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */
// const deleteCharacters = (str, length) => str.substr(0, length);
// const str = "You don't know JS";
// console.log(deleteCharacters(str, 5));

/* 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр. */
const insertDash = str => str.replaceAll(" ", "-").toUpperCase();
const str = "Life is too short to skip kebab";
console.log(insertDash(str));
