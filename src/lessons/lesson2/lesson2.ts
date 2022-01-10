 console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


console.log('Task 01')
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(a: number) {
    return function (b: number) {
        return a + b;
    }
}

console.log(sum(3)(6))
console.log('Task 02')
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
function makeCounter() {
    let count = 1
    return function () {
        return count++
    }
}
const counter = makeCounter();

console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

console.log('Task 03')
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
let makeCounters=(function () {
    let count=0
    return {
        increase: function () {
            return count+1
        },
        decrease:function (){
            return count-1
        },
        reset:function (){
            return count
        },
        set:function (){
            return count
        }
    };
})();
console.log(makeCounters.increase());
console.log(makeCounters.decrease());
console.log(makeCounters.reset());
console.log(makeCounters.set());
console.log('Task 04*')
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
function superSum(num: number) {
    if (num === 0) return 0;
    if (num === 1) return (n: number) => n;

    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= num) {
            _arguments.length=num;
            return _arguments.reduce((acc,number)=>acc+number);
        } else {
            return helper;
        }
    }
    return helper;
}
console.log(superSum(0))

// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(3)(2)(5,3))
// @ts-ignore
console.log(superSum(3)(2,5,3))
// @ts-ignore
console.log(superSum(3)(2,5)(3))
// @ts-ignore
console.log(superSum(3)(2,5)(3,9))


console.log('Task 05')
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
function sumTo(n:number){            //----------цикл
    let result=0
    for (let i=0;i<=n;i++){
            result+=i
    }
    return  result
}

function sumTo2(n:number):number{           //---------рекурсия
    return n===1?n:n+sumTo(n-1)
}

function sumTo3(n:number) {               //-----------арифметическая прогрессия
    return n * (n + 1) / 2;
}
console.log(sumTo(100))
console.log(sumTo2(100))
console.log(sumTo3(100))

function factorial(n:number):number{
    return n===1?n:n*factorial(n-1)
}
console.log(factorial(5))

function fibonachi(n:number):number{
    return n<=1?n:fibonachi(n-1)+fibonachi(n-2)
}

function fib(n:number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log(fibonachi(3))
console.log(fib(3))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list:any) {

    while (list) {
        console.log((list.value));
        list= list.next;
    }
}

function printLists(lis:any) {
    console.log((list.value)); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }
}
printList(list);
printLists(list);

function printReverseList(list:any) {

    if (list.next) {
        printReverseList(list.next);
    }
    alert(list.value);
}
function printReverseLists(list:any) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}
printReverseList(list);
printReverseLists(list);
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

//just a plug
export default () => {
};