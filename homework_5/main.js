/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */
// const stringToArray = str => str.split(" ");
// const wordsArray = stringToArray("Welcome to Lad-academy!!!");
// console.log(wordsArray);

/* 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */
// const deleteCharacters = (str, length) => str.substr(0, length);
// const str = "You don't know JS";
// console.log(deleteCharacters(str, 5));

/* 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр. */
// const insertDash = str => str.replaceAll(" ", "-").toUpperCase();
// const str = "Life is too short to skip kebab";
// console.log(insertDash(str));

/* 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний. */
// const makeFirstToUpper = str => `${str[0].toUpperCase()}${str.substring(1)}`;
// const str = "живу между if и else";
// console.log(makeFirstToUpper(str));

/* 5.Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы. */
// const capitalize = str => {
//   const strArray = str
//     .split(" ")
//     .map(word => `${word[0].toUpperCase()}${word.slice(1)}`);

//   return strArray.join(" ");
// };

// const str = "Собран из багов и кофе";
// console.log(capitalize(str));

/* 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк». */

/* Вариант с использованием массивов */
// const changeRegister = str => {
//   const strArray = str.split("");
//   changedArray = strArray.map(ch =>
//     ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
//   );
//   return changedArray.join("");
// };
// const str = "КаЖдЫй ОхОтНиК";
// console.log(changeRegister(str));

/* Вариант без использования массивов */
const changeRegister = str => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result +=
      str[i] === str[i].toUpperCase()
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }

  return result;
};

const str = "КаЖдЫй ОхОтНиК";
console.log(changeRegister(str));
