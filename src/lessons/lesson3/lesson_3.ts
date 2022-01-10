import {log} from "util";
import {rejects} from "assert";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let pr = new Promise((resolve, rejects) => {
//     // let a = 10;
//     // console.log(a);
//
//     setTimeout((response) => {
//         if (response.status === 200) {
//             resolve(response.value);
//         } else {
//             rejects(response.error);
//         }
//     }, 1000, {status: 200, value: 10, error: null});
// });
// pr.then(res=>{
//     let a="a"
//     console.log(a)
//     console.log(res+a)
//     console.log(pr)
//     return new Promise((resolve,rejects)=>{
//         setTimeout((response) => {
//             if (response.status === 200) {
//                 resolve(response.value);
//             } else {
//                 rejects(response.error);
//             }
//         }, 1000, {status: 200, value: 30, error: null});
//     })
// }).then(res2=>{
//     console.log(res2)
//
// })
// pr.catch(rej=>{
//     console.log(rej)
//     console.log()
// })


// let pr = Promise.resolve(10);
// pr
//     .then(res => {
//         console.log(res);
//         return res * 2;
//     })
//     .then(res2 => {
//         console.log(res2)
//
//     })
//     .then(res3 => {
//         console.log(res3)
//     })

let pr = Promise.reject(0);

pr
    .then(res => {
        console.log(res);
    }, err => {
        console.log(err);
        return 100500
    }).then(res => {
    console.log(res);
}, err => {
    console.log(err);
    return 100500;
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
    return 100500;
}).then(null, err4 => {
    console.log(err4)
})


pr.catch(err5 => {
    console.log('err5',err5)
})
//console.log(pr);
// just a plug
export default () => {

};