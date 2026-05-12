/* 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника. */
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days; //возвращаю результат, а не вывожу в консоль, так как зависимость от способа вывода информации - это плохая архитектура класса
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker = new Worker("Дмитрий", "Фёдоров", 5000, 22);
// console.log(worker);
// console.log(worker.getSalary());
// console.log(worker.getFullName());

/* 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников. */
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }

//   getSalary() {
//     return this.rate * this.days * this.workers;
//   }
// }

// const boss = new Boss("Иван", "Шлыков", 8000, 25, 4);
// console.log(boss);
// console.log(boss.getFullName());
// console.log(boss.getSalary());

/* 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения. */

/* Вариант 1. Вообще не вижу смысла такого подхода в создании геттеров и сеттеров, ведь всё равно имеем доступ к свойствам на прямую, поэтому сделаю ещё другой вариант*/
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }

//   get rate() {
//     return this._rate;
//   }

//   set rate(value) {
//     this._rate = value;
//   }

//   get days() {
//     return this._days;
//   }

//   set days(value) {
//     this._days = value;
//   }

//   getSalary() {
//     return this._rate * this._days;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker = new Worker("Дмитрий", "Фёдоров", 5000, 22);
// worker.rate = 6000;
// worker.days = 23;
// console.log(worker.getFullName());
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

/* Варинт 2 */
// class Worker {
//   #rate;
//   #days;

//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.#rate = rate;
//     this.#days = days;
//   }

//   get rate() {
//     return this.#rate;
//   }

//   set rate(value) {
//     this.#rate = value;
//   }

//   get days() {
//     return this.#days;
//   }

//   set days(value) {
//     this.#days = value;
//   }

//   getSalary() {
//     return this.#rate * this.#days;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker = new Worker("Дмитрий", "Фёдоров", 5000, 22);
// worker.rate = 6000;
// worker.days = 23;
// console.log(worker.getFullName());
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());
// console.log(worker);

/* 4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки. */
class MyString {
  static reverse(str) {
    return str.split("").reverse().join("");
  }

  static ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static ucWords(str) {
    return str
      .split(" ")
      .map(x => this.ucFirst(x))
      .join(" ");
  }
}

const str = "добро пожаловать в зомбиленд!";
let result = MyString.reverse(str);
console.log(result);

result = MyString.ucFirst(str);
console.log(result);

result = MyString.ucWords(str);
console.log(result);
