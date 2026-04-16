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
// const changeRegister = str => {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result +=
//       str[i] === str[i].toUpperCase()
//         ? str[i].toLowerCase()
//         : str[i].toUpperCase();
//   }

//   return result;
// };

// const str = "КаЖдЫй ОхОтНиК";
// console.log(changeRegister(str));

/* 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов. */
// const removeChar = str => {
//   let result = "";
//   const upperStr = str.toUpperCase(); // Привожу к верхнему регистру, чтобы не прописывать дополнительные условия проверки в if

//   for (let i = 0; i < str.length; i++) {
//     if (
//       (upperStr[i] >= "А" && upperStr[i] <= "Я") ||
//       (upperStr[i] >= "A" && upperStr[i] <= "Z") ||
//       (upperStr[i] >= "0" && upperStr[i] <= "9")
//     ) {
//       result += str[i];
//     }
//   }

//   return result;
// };

// const str = "!Jun-ior24Fr$*ont-+end,7р..аз--Р?АБ";
// console.log(removeChar(str));

/* 8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента. */

/* Вариант 1 */
// const zeros = (num, len) => {
//   let result = num < 0 ? `${num}` : `+${num}`;
//   const zeroCount = len - (result.length - 1);
//   let i = 0;

//   while (i < zeroCount) {
//     result += 0;
//     i++;
//   }

//   return result;
// };

// console.log(zeros(-22, 5));

/* Вариант 2. Своя задача. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение в зависимости от передаваемого аргумента len. 
Если len > 0, то число num дополняется нулями справа и функция возвращает целое число.
Если len < 0, то число num дополняется нулями слева и функция возвращает вещественное число */
// const zeros = (num, len) => {
//   if (typeof num !== "number" || typeof len !== "number") {
//     return "Некорректное значение. Передаваемые аргументы должны быть числами.";
//   }

//   let sign = num < 0 ? "-" : "";
//   let absNumStr = Math.abs(num).toString();

//   let zerosCount = Math.abs(len) - absNumStr.length;
//   let zerosStr = ""; //до выполнения задания не знал что можно использовать "0".repeat(zerosCount), поэтому формировал строку нулей сам
//   let i = 0;

//   while (i < zerosCount) {
//     zerosStr += 0;
//     i++;
//   }

//   return len < 0
//     ? +`${sign}0.${zerosStr}${absNumStr}`
//     : +`${sign}${absNumStr}${zerosStr}`;
// };

// console.log(zeros(4, -3));

/* 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов. */
// const comparison = (str, otherStr) =>
//   str.toUpperCase() === otherStr.toUpperCase();

// const str = "сИстеМа Дала СбоЙ - теМпературА 38";
// const otherStr = "сиСтема даЛА сБой - темпЕраТура 38";
// console.log(comparison(str, otherStr));

/* 10. Напишите функцию insensitiveSearch(str1, str2), которая
осуществляет поиск подстроки str2 в строке str1 без учёта
регистра символов. */
const insensitiveSearch = (str, otherStr) =>
  str.toUpperCase().includes(otherStr.toUpperCase());

console.log(insensitiveSearch("Россия", "РОС"));
