import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

//task 1
// setTimeout(()=> console.log(1), 0);
// console.log(2);
// (() => console.log(3))();
// Promise.resolve(console.log(4));


// Task 2
//
// new Promise((res, rej) => {
//     console.log(1);
// })
// new Promise((res, rej) => {
//     setTimeout(()=> console.log(2), 0);
// })
// Promise.resolve(setTimeout(()=> console.log(3), 0));
// console.log(4);
// Promise.reject(console.log(5));


// Task 3
//
// (function(){
//     setTimeout(()=> console.log(1), 100);
// })();
// console.log(2);
// new Promise((res, rej) => {
//     setTimeout(()=> console.log(3), 50);
// })
// function f() {
//     console.log(4);
// }
// Promise.resolve(console.log(5));


// Task 3a
// (function(){
//     setTimeout(()=> console.log(1), 100);
// })();
// console.log(2);
// let i = 0;
// while ( i < 5000000000 ) {
//     i++
// }
// new Promise((res, rej) => {
//     setTimeout(()=> console.log(3), 50);
// })
// function f() {
//     console.log(4);
// }
// Promise.resolve(console.log(5));

//Task 4
// function f(num:any) {
//     console.log(num);
// }
// Promise.resolve(1)
//     .then(f);
// (function(){
//     console.log(2);
// })();
// console.log(3);
// new Promise((res, rej) => {
//     console.log(4);
// });
// setTimeout(f, 0, 5);


// Task 5
//
// console.log(1);
// function f() {
//     console.log(2);
// }
// setTimeout(()=>{
//     console.log(3);
//     let p = new Promise((res, rej) => {
//         console.log(4);
//         res();
//     });
//     p.then(() => f())
// },0);
// let l = new Promise((res, rej) => {
//     console.log(5);
//     rej();
// });
// l.then(res => console.log(res)).catch(() => console.log(6));
// console.log(7);

//Task 6
//
// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((resolve, reject) => {
//     setTimeout(() => reject(console.log(3)), 1000);
// }).catch(() => console.log(4));
// console.log(5);


// Task 7
//
// async function sleep(ms:any) {
//     await new Promise(res=>{
//         setTimeout(() => {
//             console.log(ms);
//             res()
//         }, ms*100);
//     })
//
// }
//
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
//
// show();


// Task 8
// let pr1 = new Promise((res) => {
//     res(10);
// });
// let pr2 = new Promise((res) => {
//     res(0)
// });
// pr1
//     .then((res: any) => {
//         console.log(res);
//         return res + 2;
//     })
//     .then((res: any) => {
//         console.log(res);
//         return res + 2;
//     })
//     .then(console.log);
// pr2
//     .then((res: any) => {
//         console.log(res);
//         return res + 1;
//     })
//     .then((res: any) => {
//         console.log(res);
//         return res + 1;
//     })
//     .then(console.log);


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// let pr = new Promise((resolve, reject) => {
//     console.log("Promise is created")
// });
// console.log(pr);


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let pr=new Promise((res,rej)=>{
//     res('Promise Data')
// })
// pr.then(res=>{
//     console.log('res:',res)
// })
// console.log(pr)
// let pr1 =Promise.resolve('Promise Data');
// console.log(pr1);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let pr = new Promise((res, rej) => {
//     rej('Promise Error')
// })
// pr.
// catch(rej=>{
//     console.log('rej:',rej)
// })
// console.log(pr)
// let pr1 = Promise.reject('Promise Error');
// console.log(pr1);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let pr=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('Promise Data')
//     },3000)
// })
// pr.then(res=>{
//     console.log('fulfilled:',res)
// })
// console.log(pr);


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type objType = {
    promise: null | Promise<any>;
    resolve: null | Function;
    reject: null | Function;
    onSuccess: (paramName: string) => void;
    onError: (paramName: string) => void;
};

const someObj: objType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError(paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`);
    },
};

export const createPromise = () => {
    someObj.promise = new Promise((res, rej) => {
        someObj.resolve = res;
        someObj.reject = rej;
    });
    someObj.promise
        .then(someObj.onSuccess)
        .catch(someObj.onError)

    //@ts-ignore
    window.obj = someObj;
}

export const resolvePromise = () => {
    someObj.resolve && someObj.resolve('Success');
}

export const rejectPromise = () => {
    someObj.reject && someObj.reject('Fail');
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// let pr = new Promise((res, rej) => {
//     setTimeout(() => {
//         return res("My name is ")
//     }, 1000)
// })
// pr
//     .then(res=>{
//         console.log(onSuccess(res,'Sergey'))
//         }
//     )
//     .then(res1 => {
//         console.log('res1',res1)
//         print(res1)
//     })
// function onSuccess(param: any,param2:any) {
//     return param + param2
// }
//
// function print(param: any) {
//     return console.log(param)
// }
// console.log(pr)


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let pr1=new Promise(res=>{
    setTimeout(()=>{
        return res({ name: "Anna" } )
    },2000)
})
let pr2=new Promise(res=>{
    setTimeout(()=>{
        return res({age: 16} )
    },3000)
})
let pr3=new Promise(res=>{
    setTimeout(()=>{
        return res({city: ''})
    },4000)
})
Promise.all([pr1,pr2,pr3])
    .then(values => {
        const  [pr1,pr2,pr3]=values
        console.log(pr1,pr2,pr3)
    })

// just a plug
export default () => {
};