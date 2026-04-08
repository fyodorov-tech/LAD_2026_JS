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
const isSumGreaterThanTen = (firstNumber, secondNumber) =>
  firstNumber + secondNumber > 10;

console.log(isSumGreaterThanTen(8, 3));
