// class Test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         //this.sayHi = function () {};
//     }
//     sayHi() {}
// }

// let obj = new Test ('Evgen', 33);
// let obj3 = new Test ('Vlad', 33);
//
// obj.__proto__.sayBY = function () {};
// console.log(obj.__proto__);
// console.log(obj3);
//
// let obj2 = new Test ('Hanna', 25);
// console.log(obj2)

// console.dir(() => {});
// console.dir(function () {});
// console.dir(class {});



// class Test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {};
//
//     someArrow = () => {}
// }
// Test.prototype.someTestMethod = function (){};
//
// console.log(Test.prototype);
//
// let obj = new Test ('Hanna', 25);
// console.log(obj);
//
// let objProto = Object.getPrototypeOf(obj);
// console.log(objProto);
// console.log(Test.prototype === objProto);
// console.log(Test.prototype === obj.__proto__);

// let obj = { name: 'Evgen', testM() {}};
// let obj2 = { sayName: function () { console.log(this.name) }, test: 10 };
// let obj3 = Object.setPrototypeOf(obj, obj2);
// obj3.sayName();
// console.log('obj ',obj)
// console.log('obj2 ',obj2)
// console.log('obj3 ',obj3)

// Object.setPrototypeOf(obj, obj2);
// obj.sayName();

// class Test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(`hi ${this.name}`);
//     };
// }
//
// let superObj = {
//     sayHi() {
//         console.log(`hihihi ${this.name}`);
//     },
//     sayBye() {
//         console.log('Bye!');
//     }
// }
//
// Object.setPrototypeOf(Test.prototype, superObj);
//
// let testObj = new Test('Test', 10);
// console.log(testObj);
// testObj.sayHi();
// testObj.sayBye();


// class Test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(`hi ${this.name}`);
//     };
// }
// Test.prototype = {sayBye() {}};
//
// let testObj = new Test('Test', 10);
// console.log(testObj);

// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Test.prototype.sayHi = function () {
//     console.log(`hi ${this.name}`);
// }
//
// Test.prototype = {sayBla() {}};
//
// let testObj = new Test('Test', 10);
// console.log(testObj);


//console.dir(Object);

// class Test {
//     sayName(){};
// }
//
// class Test2 extends Test {
//     sayBye() {}
// }
//
// class Test3 extends Test2 {
//     sayYo() {}
// }
//
// let obj = new Test3();
// console.log(obj);

// function Test() { }
// Test.prototype.sayName = function (){};
//
// function Test2() {
//     Test.call(this);
// }
// Test2.prototype = Object.create(Test.prototype, {sayBye: { value: function() {},}, constructor: {value: Test2}});
//
// function Test3() {
//     Test2.call(this);
// }
// Test3.prototype = Object.create(Test2.prototype, {sayYo: { value: function() {},}, constructor: {value: Test3}});
//
// console.log(new Test3());
//
// console.log(Object.create(null));

// let obj = {name: 'Evgen'};
// let obj2 = {
//     sayName() {
//         console.log(this.name);
//     }
// };
// obj2.sayName.bind(obj)();
//
// Function.prototype._bind = function(ctx, ...args) {
//        const _this = this;
//     return function(...args2) {
//         return _this.apply(ctx, [...args, ...args2]);
//     }
// }
// obj2.sayName._bind(obj)();
//
// Function.prototype.__bind = function (ctx, ...args) {
//     ctx.___someHidenMethod___ = this;
//     return function (...args2) {
//         return ctx.___someHidenMethod___(...args, ...args2);
//     }
// }
//
// //obj.sayName = obj2.sayName
//
// obj2.sayName.__bind(obj)();

// let obj = { a: 0 };
// let superObj = Object.create(obj);
// console.log(superObj);
// console.log(superObj.hasOwnProperty('a'));
// superObj.a += 1; // superObj.a = superObj.a + 1
// console.log(superObj);
// console.log(superObj.hasOwnProperty('a'));
// obj.a = 2;
// console.log(superObj);

// let objProto1 = { a: 0 };
// let objProto2 = { a: 2 };
//
// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Vlad', age: 33 };

// let spreadObj = {...obj, ...obj2 };
// console.log(spreadObj);
// Object.setPrototypeOf(obj, objProto1);
// Object.setPrototypeOf(obj2, objProto2);
// console.log(obj);
// console.log(obj2);

// let spreadObj = { ...obj, ...obj2 };
// console.log(spreadObj);

//console.log(Object.assign(obj, obj2));

// let obj = { a: 0 };
//
// if ( obj.a === 0 && obj.a === 1 && obj.a === 2 ) {
//     console.log('work')
// }