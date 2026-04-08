/* 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. */
// function getSquare(number) {
//   return number ** 2;
// }

// console.log(getSquare(5));

/* 2. Сделайте функцию, которая возвращает сумму двух чисел. */
// function getSum(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// console.log(getSum(30, 44));

/* 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. */
// const subtractAndDivide = function (firstNumber, secondNumber, thirdNumber) {
//   //Проверку деления на ноль не стал делать, так как посчитал допустимыи результат деления -  infinity
//   return (firstNumber - secondNumber) / thirdNumber;
// };

// console.log(subtractAndDivide(12, 6, 3));

/* 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */
// function getDayOfWeek(value) {
//   switch (value) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Передаваемый в функцию аргумент должен быть числом и иметь значение от 1 до 7 включительно";
//   }
// }

// console.log(getDayOfWeek(5));

/* 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. */
// const isEqual = (firstNumber, secondNumber) => firstNumber === secondNumber;

// console.log(isEqual(2, 2));

/* 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false. */
// const isSumGreaterThanTen = (firstNumber, secondNumber) =>
//   firstNumber + secondNumber > 10;

// console.log(isSumGreaterThanTen(8, 3));

/* 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false. */
// const isNegativeNumber = number => number < 0;
// console.log(isNegativeNumber(-2));

/* 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */
// const isNumberInRange = number => number > 0 && number < 10;

// console.log(isNumberInRange(5));

/* 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр. */

//Вариант 1 (без готовых методов/функций)
// const getDigitsSum = number => {
//   if (typeof number !== "number") {
//     return "Некорректные данные. Аргументом функции должно быть число";
//   }

//   let digitsSum = 0;
//   number = number < 0 ? -number : number;

//   let strOfNumber = "" + number;

//   for (let i = 0; i < strOfNumber.length; i++) {
//     digitsSum += +strOfNumber[i];
//   }

//   return digitsSum;
// };

// console.log(getDigitsSum(123));

//Вариант 2
// const getDigitsSum = number => {
//   if (typeof number !== "number") {
//     return "Некорректные данные. Аргументом функции должно быть число";
//   }

//   let digitsSum = 0;
//   let absNumber = Math.abs(number);

//   while (absNumber > 0) {
//     digitsSum += absNumber % 10;
//     absNumber = Math.floor(absNumber / 10);
//   }

//   return digitsSum;
// };

// console.log(getDigitsSum("123"));

/* 10. *Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи. */
// const getDigitsSum = number => {
//   if (typeof number !== "number") {
//     return "Некорректные данные. Аргументом функции должно быть число";
//   }

//   let digitsSum = 0;
//   let absNumber = Math.abs(number);

//   while (absNumber > 0) {
//     digitsSum += absNumber % 10;
//     absNumber = Math.floor(absNumber / 10);
//   }

//   return digitsSum;
// };

// for (let i = 1; i <= 2020; i++) {
//   if (getDigitsSum(i) === 13) {
//     console.log(i);
//   }
// }

/* 11. Сделайте функцию isEven() (even - это четный), которая
параметром принимает целое число и проверяет: четное оно
или нет. Если четное - пусть функция возвращает true, если
нечетное - false. */
// const isEven = number => number % 2 === 0;
// console.log(isEven(4));

/* 12. *Дано число. Сложите его цифры. Если сумма получилась
более 9-ти, опять сложите его цифры. И так, пока сумма не
станет однозначным числом (9 и менее). Можно использовать
функцию getDigitsSum из 9 задачи */
const getDigitsSum = number => {
  if (typeof number !== "number") {
    return "Некорректные данные. Аргументом функции должно быть число";
  }

  let digitsSum = 0;
  let absNumber = Math.abs(number);

  while (absNumber > 0) {
    digitsSum += absNumber % 10;
    absNumber = Math.floor(absNumber / 10);
  }

  return digitsSum;
};

let number = 19348;

while (number > 9) {
  number = getDigitsSum(number);
}
console.log(number);
