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
