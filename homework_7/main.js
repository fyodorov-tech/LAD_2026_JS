/* 1. Что выведет функция? */
// function f() {
//   alert(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();

/* Функция выведет object Window, так как мы в качестве контекста в bind передали null. А в нестрогом режиме null и undefined приводятся к глобальному объекту. В данном случае Window */

/* 2. Можем ли мы изменить this дополнительным связыванием?
function f() {
alert(this.name);
}
f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
f(); */

/* bind создаёт новую функцию с жёстко зафиксированным this, и повторный bind не изменяет уже установленную привязку */

/* 3. В свойство функции записано значение. Изменится ли оно после применения bind? */
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );

/* После применения  bind у оригинальной функции sayHi так и останется свойство test, а после bind создается функция обертка bound, внутри которой движок хранит ссылку на оригинал и this, но эти данные недоступны, поэтому bound.test === undefined */

/* 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему? */
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk, user.loginFail);

/* askPassword работает неправильно, потому что мы передаём методы объекта как обычные функции, из-за чего при их вызове теряется контекст this. Чтобы исправить это, нужно использовать bind(user), который создаёт новую функцию с зафиксированным this:
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/

/* 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail? */
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "John",
//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// /* Ответ */
// askPassword(user.login.bind(user, true), user.login.bind(user, false));

/* 6. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.
из переменной elem. */
// const elem = { value: "Привет" };

// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }

// func = func.bind(elem);
// //Тут напишите конструкцию с bind()
// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

/* 7. Есть функция которая складывает три числа.Выполните каррирование.
const sum = (a, b, c) => a + b + c */
// const sum = a => b => c => a + b + c;
// alert(sum(4)(5)(6));

/* 8. Реализовать таймер-функцию используя замыкания. Функция принимает два аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера. */

const timer = (start, finish) => {
  console.log(start); //вывожу первое значение сразу, так как иначе оно будет выведено на секунду позже, а это будет значить, что стартуем не с 10 например, а с 11 на самом деле

  const timerId = setInterval(() => {
    start--;
    console.log(start); //вывожу значение start, чтобы было проще отслеживать корректность работы

    if (start === finish) {
      clearInterval(timerId);
      console.log("Работа таймера завершена");
      return;
    }
  }, 1000);
};

timer(10, 5);
