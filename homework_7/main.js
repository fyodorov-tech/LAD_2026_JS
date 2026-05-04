/* 1. Что выведет функция? */
// function f() {
//   alert(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();

/* Функция выведет object Window, так как мы в качестве контекста в bind передали null. А в нестрогом режиме null и undefined приводятся к глобальному объекту. В данном случае Window */
