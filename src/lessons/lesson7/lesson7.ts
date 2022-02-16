console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI
///task-1
// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// alert( rabbit.jumps ); // ? (1)
//
// // @ts-ignore
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); // ? (2)
//
// // @ts-ignore
// delete animal.jumps;
//
// alert( rabbit.jumps ); // ? (3)
//task-2
// let head = {
//     glasses: 1,
//
// };
//
// let table = {
//     pen: 3,
//     _proto_:head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     _proto_: table
// };
//
// let pockets = {
//     money: 2000,
//     _proto_:bed
// };
// console.log('pocket',pockets._proto_._proto_._proto_.glasses)
//
// console.log('head',head.glasses)
//task-3
// let animal = {
//     eat() {
//         // @ts-ignore
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();
//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {};