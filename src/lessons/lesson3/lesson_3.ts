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
//     let a = 10;
//     console.log(a);
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

//
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
//
// let pr = Promise.reject(0);
//
// pr
//     .then(res => {
//         console.log('res1',res);
//     }, err => {
//         console.log('err1',err);
//         return 100500
//     }).then(res => {
//     console.log('res2',res);
// }, err => {
//     console.log('err2',err);
//     return 100500;
// }).then(res => {
//     console.log('res3',res);
// }, err => {
//     console.log('err3',err);
//     return 100500;
// }).then(null, err4 => {
//     console.log('err4',err4)
// })
//
//
// pr.catch(err5 => {
//     console.log('err5',err5)
// })
// console.log(pr);
//
// console.log('Start')
// async function f(){
//     try{
//     console.log('Function start')
//     let result=await new Promise((res)=>{
//         setTimeout(res,1000,'Done');
//     })
//         let result1=await new Promise((res)=>{
//         setTimeout(res,1000,'Done1');
//
//     })
//         let result2=await new Promise((res)=>{
//         setTimeout(res,1000,result);
//
//     })
//     console.log('result',result);
//     console.log('result1',result1);
//     console.log('result2',result2);
//     console.log('Function end');
// }catch (e){
//         console.log('e',e)
//     }
// }
// f()
// console.log('End')
//
// let pr = new Promise((resolve, reject) => {
//     let a = 10;
//     console.log(a);
//     // some request
//     setTimeout((response) => {
//         if (response.status === 200) {
//             resolve(response.value);
//         } else {
//             reject(response.error);
//         }
//     }, 100, { status: 200, value: 10, error: null });
// });
//
// pr.then( res => {
//     console.log(res);
//     console.log('pr ', pr);
//     return new Promise((resolve, reject) => {
//         // res
//         setTimeout((response) => {
//             if (response.status === 200) {
//                 resolve(response.value);
//             } else {
//                 reject(response.error);
//             }
//         }, 100, { status: 200, value: 500, error: null });
//     })
// }).then(res2 => {
//     console.log(res2);
//     return new Promise((resolve, reject) => {
//         // res2
//         setTimeout((response) => {
//             if (response.status === 200) {
//                 resolve(response.value);
//             } else {
//                 reject(response.error);
//             }
//         }, 100, { status: 200, value: 100500, error: null });
//     })
// }).then(res3 => {
//     console.log(res3);
// })
//
// let pr = Promise.resolve(10);
//
// pr
//     .then( res => {
//         console.log(res);
//         return res * 2;
//     })
//     .then( res2 => {
//         console.log(res2);
//     })
//     .then( res3 => {
//         console.log(res3);
//     })

// function createRequest(url: string, param:any) {
//     let prom = fetch(url,param); // return new promise obj
//     return prom
// }
//
//
// console.log(createRequest)
// console.log(fetch)
//
// let pr = Promise.resolve(10);
//
// pr
//     .then( res => {
//         return createRequest('some URL', res);
//     })
//     .then( res2 => {
//         console.log(createRequest)
//         return createRequest('some URL 2', res2);
//     })
//     .then( res3 => {
//         console.log(res3);
//     })
//



//let pr = Promise.reject(0);

// pr
//     .then( res => {
//         console.log(res);
//     }, err => {
//         console.log('err',err);
//         throw 5000;
//         return 100500;
//     })
//     .then(res2 => {
//         console.log(res2);
//     }, err2 => {
//         console.log('err2 ', err2);
//     })
//     .then(null, err3 => {
//         console.log(err3);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//
// pr
//     .catch(err => {
//         console.log(err);
//     })
//     .then( res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .then(res2 => {
//         console.log(res2);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//
// let pr = Promise.resolve(1);
//
// pr
//     .finally( () => {
//         console.log('Fin');
//         return 50;
//         throw 100;
//     })
//     .then( res => {
//         console.log('res',res);
//     })
//     .catch(err => {
//         console.log('err',err);
//     })


// let a = 10;
//
// let pr = Promise.resolve(1);
//
// pr
//     .then( res => {
//         console.log('res ', res);
//     })
//     .catch(err => {
//         console.log('err ', err);
//     })
//
// console.log(a);

//
// let a = 10;
//
// let pr1 = Promise.resolve(0);
// let pr2 = Promise.resolve(1);
//
// setInterval(console.log, 100, 5);
//
// pr1
//     .then(res => {
//         console.log('res',res);
//         a += 1;
//         return res + 10;
//     })
//     .then(res2 => {
//         console.log('a',a);
//         console.log('res2',res2);
//         return res2 ;
//     })
//     .then(res3 => {
//         console.log('res3',res3);
//     })
//
// pr2
//     .then(ress => {
//         console.log('ress',ress);
//         return ress + 1;
//     })
//     .then(ress2 => {
//         console.log('ress2',ress2);
//         return ress2 + 1;
//     })
//     .then(ress3 => {
//         console.log('ress3',ress3);
//     })
//
// console.log('a',a);


// console.log('Start')
// async function f() {
//     try {
//         console.log('Function Start')
//         let result = await new Promise((res) => {
//             setTimeout(res, 1000, 'Done');
//         })
//         let result1 = await new Promise((res) => {
//             setTimeout(res, 1000, 'Done');
//         })
//         let result2 = await new Promise((res) => {
//             setTimeout(res, 1000, 'Done');
//         })
//         console.log(result)
//         console.log('Function End')
//     } catch (e) {
//
//     }
// }
//
// f()
// console.log('End')
// just a plug
export default () => {

};