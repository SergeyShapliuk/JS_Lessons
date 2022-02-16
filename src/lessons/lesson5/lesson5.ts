


console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sumFunc = function(){}
//     return [10];
// }
//
// Person.prototype.sumFunc = function(){};
// //
// let evgenObj = new Person('Evgen', 33);
// console.log(evgenObj);

// function somePerson (name, age) {
//     return {
//         name,
//         age,
//         sumFunc: function(){},
//     }
// }
//
// let vladObj = somePerson('Vlad', 33);
// console.log(vladObj);

//
// function Person(name, age) {
//     "use strict";
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.sumFunc = function(){};
//
// let evgenObj = Person('Evgen', 33);
// console.log(evgenObj);


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.sumFunc = function(){};
//
// let evgenObj = Person('Evgen', 33);
// console.log(evgenObj);

// type PersonType = {
//     name: string,
//     age: number,
// }
//
// function Person(this: PersonType, name: string, age: number) {
//     this.name = name;
//     this.age = age;
// }
//
// let evgenObj = new (Person as any)('Evgen', 33);
// console.log(evgenObj);

//console.log(this);

// function f() {
//     //@ts-ignore
//     console.log('this in Function declaration ', this);
// }
//
// f();


// let obj = { name: 'Evgen', };
//
// function f() {
//     console.log('this in Function declaration ', this);
//     console.log('My Name is ', this.name );
// }
//
// f();
//
// obj.f = f;
// obj.f();


// let obj = { name: 'Evgen', };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// function f() {
//     console.log('this in Function declaration ', this);
// }
//
// obj2.f = f;
// obj2.f();
// obj3.innerObj.f = obj2.f;
// obj3.innerObj.f();


// let obj = { name: 'Evgen', };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// function f() {
//     console.log('this in Function declaration ', this);
// }
//
// obj2.f = f;
//
// let objFunck = obj2.f;
// objFunck();


// let obj = {
//     name: 'Evgen',
//     f() {
//         let sameParam = this;
//         function inner() {
//             console.log('this in Function declaration ', this);
//             console.log('outer this ', sameParam);
//         }
//         inner();
//     }
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj.f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         function inner() {
//             console.log('this in Function declaration ', this);
//         }
//         return inner;
//     }
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj3.f = obj.f();
// obj3.f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         function inner() {
//             console.log('this in Function declaration ', this);
//         }
//         return inner;
//     }
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj3.f = obj.f;
// obj3.f()();


// // function/class, code block, loops, module, switch, try/catch/finnaly, if/else
//
// const arrow = () => {
//     console.log('this in arrow function ', this);
// };
//
// let obj = {
//     name: 'Evgen',
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// arrow();
// obj2.a = arrow;
// obj2.a();


// let obj = {
//     name: 'Evgen',
//     a: () => {
//         console.log('this in arrow function ', this);
//     },
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj.a();

// let obj = {
//     name: 'Evgen',
//     f() {
//         // this === obj
//         return () => {
//             console.log('this in arrow function ', this);
//         };
//     },
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj2.a = obj.f();
// obj2.a();


// let obj = {
//     name: 'Evgen',
//     f() {
//         return () => {
//             console.log('this in arrow function ', this);
//         };
//     },
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// let someFunc = obj.f();
// someFunc();


// let obj = {
//     name: 'Evgen',
//     a: () => function () {
//         console.log('this ', this);
//     },
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// let someFunc = obj.a();
// someFunc();

// let obj = {
//     name: 'Evgen',
//     a: () => function () {
//         console.log('this ', this);
//     },
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj2.f = obj.a();
// obj2.f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         return () => () => {
//             console.log('this ', this);
//         };
//     }
// };
// let obj2 = { name: 'Hanna', };
// let obj3 = {
//     name: 'SomeName',
//     innerObj: {
//         name: 'InnerName',
//     },
// };
//
// obj.f()()()


// let exFunc = function () {
//     console.log('this ', this);
// };
//
// exFunc();
//
// let obj = {
//     name: 'Evgen',
// };
//
// obj.f = exFunc;
// obj.f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         setTimeout(function() {
//             console.log('this ', this);
//         }, 100);
//         setTimeout( () => {
//             console.log('this ', this);
//         }, 100);
//     }
// };
//
// obj.f();


/// Call, Apply, Bind

// let obj = {
//     name: 'Evgen',
//     f(a: any, b: any) {
//         console.log(this.name, a, b);
//     }
// };
// let obj2 = {name: 'Hanna'}
// let obj3 = {name: 'Vlad'}
//
// let bindedFunc = obj.f.bind(obj2,1 );
// //@ts-ignore
// bindedFunc(50)

//obj.f.bind(obj3, 0 ).bind(obj2, 1)();
//obj.f.bind(obj2,0)(1)

//obj.f.bind(obj3, 0 ).call(obj2, 1);

// obj.f.call(obj3, 100, 500);
// obj.f.apply(obj3, [100, 500]);


// function test (a1: any, a2: any, a3: any) {
//     console.log(arguments);
//     //@ts-ignore
//     // [...arguments].filter(el => {
//     //     if (el > 40) {
//     //         console.log(el);
//     //     }
//     //     return el > 40;
//     // });
//     [].filter.call(arguments, el => {
//             if (el > 40) {
//                 console.log(el);
//             }
//             return el > 40;
//         })
// }
// test(0, 50, 100);


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта
//
type someObjType = {
    name: string;
    age: number;
    greeting:()=>void
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32,
    greeting:function greeting(){
        return console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}
someObj.greeting();

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
//
// let counter: any = {
//     count: 0,
//     getCurrentCount: function () {
//         return this.setCurrentCount()
//     },
//     increment: function () {
//         this.count++
//         return JSON.stringify(this)
//     },
//     decrement: function () {
//         this.count--
//         return JSON.stringify(this)
//     },
//     setCurrentCount: function () {
//         return JSON.stringify(this)
//     },
//     restCurrentCount: function () {
//         return this.count=0
//     },
// }
// console.log(counter.getCurrentCount())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.setCurrentCount())
// console.log(counter.restCurrentCount())

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// let counter: any = {
//     count: 0,
//     getCurrentCount() {
//         return alert(this.count)
//     },
//     increment() {
//         this.count ++
//         return this
//     },
//     decrement() {
//         this.count--
//         return this
//     },
//     setCurrentCount(num:number) {
//         this.count=num
//         return this
//     },
// }
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()

// let ladder = {
//     step: 0,
//     up() {
//         this.step++
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return console.log(this);
//     }
// }
//
// ladder.up().up().down().up().down().showStep()
// // Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

type myFirstConstructorFuncTy={
    name:string
    age:number
    greeting:any
}
const myFirstConstructorFunc=new Function()





//
//
//
// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

// let One = {name: 'One'};
// let Two = {
//     name: 'Two', sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
// Two.sayHello.bind(One)()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// let helperObj = {
//     name: 'Dima',
//     age: 35,
//     changeName: function (name: string) {
//         //@ts-ignore
//        this.name = name
//         return this
//     },
//     setAge: function (age: number) {
//         this.age = age
//         return console.log(this)
//     },
//     greeting:Two.sayHello
// }
// helperObj.changeName('Sergey').setAge(37)
// helperObj.greeting()

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// let bindNumber = function sumTwoNumbers(a: number, b: number): number {
// const sum=()=>a+b
//     return sum()
// }
//
// console.log(bindNumber(1, 2))

// let bindNumber = function sumTwoNumbers(a: number, b: number): number {
//    return a + b
// }
// let sum=bindNumber.bind(bindNumber)
// console.log(bindNumber)
// console.log(sum(1,1))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// function func(name1:string,name2:string){
//     One.name=name1
//     helperObj.name=name2
//     return console.log(name1)
// }
// func.call(One,'Sergyo',helperObj.name)
// // @ts-ignore
// console.log(One.name)
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
//console.log(helperObj.setAge.bind(Two)(30))
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
// @ts-ignore
// const hi=new One(helperObj.greeting.call(Two))
// console.log(hi())

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};