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
const subtractAndDivide = function (firstNumber, secondNumber, thirdNumber) {
  return (firstNumber - secondNumber) / thirdNumber;
};

console.log(subtractAndDivide(12, 6, 3));
