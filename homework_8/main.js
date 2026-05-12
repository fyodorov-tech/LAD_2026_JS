/* 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника. */
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days; //возвращаю результат, а не вывожу в консоль, так как зависимость от способа вывода информации - это плохая архитектура класса
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const worker = new Worker("Дмитрий", "Фёдоров", 5000, 22);
console.log(worker);
console.log(worker.getSalary());
console.log(worker.getFullName());
