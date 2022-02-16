console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
//
// interface IStudent {
//     firstname: string
//     lastName: string
//     numberGroup: number
//     progress: number[]
//     averageMark: number
// }
//
// class Student implements IStudent {
//     firstname: string
//     lastName: string
//     numberGroup: number
//     progress: number[]
//     averageMark: number
//
//     constructor(firstname: string, lastName: string, numberGroup: number, progress: number[]) {
//         this.firstname = firstname
//         this.lastName = lastName
//         this.numberGroup = numberGroup
//         this.progress = progress
//         this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
//     }
//
//     private static sortStudents(s1: IStudent, s2: IStudent) {
//         if (s1.averageMark > s2.averageMark) {
//             return 1
//         } else if (s1.averageMark < s2.averageMark) {
//             return -1
//         } else {
//             return 0
//         }
//     }
//
//     static sort(arr: IStudent[]) {
//         let temp = [...arr]
//         return temp.sort(this.sortStudents)
//     }
//
//     private static isAllMarksEqualFive(marks: number[]) {
//         return marks.every(m => m === 5)
//     }
//
//     private static isAllMarksEqualFour(marks: number[]) {
//         return marks.every(m => m === 4)
//     }
//
//     private static filterStudents(arr: IStudent[]) {
//         const result: IStudent[] = []
//         arr.forEach(item => {
//             if (item.averageMark === 4 || item.averageMark === 5) result.push(item);
//         });
//         // arr.forEach(item => {
//         //     if (this.isAllMarksEqualFour(item.progress) || this.isAllMarksEqualFive(item.progress))
//         //         result.push(item);
//         // });
//         return result
//     }
//
//     static printGoodStudent(arr: Array<IStudent>) {
//         this.filterStudents(arr).forEach(s => {
//             console.log(`Student - ${s.firstname}, Group - ${s.numberGroup};`)
//         })
//     }
// }
//     let students=[];
// students.push(new Student('Eugene', 'Sheuchuk', 1, [4,4,4,4,4]));
// students.push(new Student('Vlad', 'Bizin', 2, [5,5,5,5,5]));
// students.push(new Student('Hanna', 'Kicel', 3, [4,5,4,5,5]));
// students.push(new Student('Nick', 'Stone', 4, [3,4,3,5,3]));
// students.push(new Student('Alex', 'Page', 5, [3,4,3,3,4]));
// students.push(new Student('Test', 'Testovich', 6, [3,5,3,5]));
//
// console.log(students);
//
// console.log(Student.sort(students));
//
// Student.printGoodStudent(students);


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// class Example {
//     name:string
//     age:number
//     constructor(name:string='Sergey',age:number=43) {
//         this.name=name
//         this.age=age
//     }
//     static delete(a:string,b:number){
//         let classEx=[a,b]
//         console.log(classEx)
//         return  classEx
//
//     }
//
// }
//
// console.log(Example.delete('d',4))
// console.log(Example.delete('Sergey',43))
// console.log(Example)
// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// interface ITime {
//     hours: number;
//     minutes: number;
//     seconds: number;
//     setHours: (h: number) => void | Error;
//     setMinutes: (m: number) => void | Error;
//     setSeconds: (s: number) =>  void | Error;
// }
// class Time implements ITime {
//     hours: number;
//     minutes: number;
//     seconds: number;

//     constructor(hours: number, minutes: number, seconds: number) {
//         this.hours = this.checkHours(hours);
//         this.minutes = this.checkMinutes(minutes);
//         this.seconds = this.checkSeconds(seconds);
//     }
//     private checkHours(h: number) {
//         if (h < 0 || h >= 24) throw new Error('incorrect value of an hour');
//         return h;
//     }
//     setHours(h: number) {
//         this.hours = this.checkHours(h);
//     }
//     private checkMinutes(h: number) {
//         if (this.isLessZeroOrMoreThanSixty(h)) throw new Error('incorrect value of minutes');
//         return h;
//     }
//     setMinutes(m: number) {
//         this.minutes = this.checkMinutes(m);
//     }
//     private checkSeconds(s: number) {
//         if (this.isLessZeroOrMoreThanSixty(s)) throw new Error('incorrect value of seconds');
//         return s;
//     }
//     setSeconds(s: number) {
//         this.seconds = this.checkSeconds(s);
//     }
//     private isLessZeroOrMoreThanSixty(n: number) {
//         return n < 0 || n >= 60;
//     }
//     getTime() {
//         return `${this.formatNumber(this.hours)}:${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds)}`;
//     }
//     private formatNumber(n:number) {
//         return n >= 10 ? n : '0' + n;
//     }
// }
//
// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// interface ICustomer {
//     name: string;
//     surname: string;
//     address: string;
//     account: number;
// }
//
// class Customer implements ICustomer {
//     private _name: string;
//     private _surname: string;
//     private _address: string;
//     private _account: number;
//
//     constructor(name: string, surname: string, address: string, account: number) {
//         this._name = name;
//         this._surname = surname;
//         this._address = address;
//         this._account = account;
//     }
//     get name() {
//         return this._name;
//     }
//
//     set name(n: string) {
//         this._name = n;
//     }
//
//     get surname() {
//         return this._name;
//     }
//
//     set surname(s) {
//         this._surname = s;
//     }
//
//     get address() {
//         return this._address;
//     }
//
//     set address(a) {
//         this._address = a;
//     }
//
//     get account() {
//         return this._account;
//     }
//
//     set account(acc) {
//         this._account = acc;
//     }
//
//     print() {
//         console.log(`${this.name} ${this.surname}, Address - ${this.address}, Account - ${this.account}`);
//     }
//
//     static sort(c1: ICustomer, c2: ICustomer) {
//         if (c1.name > c2.name) {
//             return 1;
//         } else if (c1.name < c2.name) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
// }
//
// let custs = [];
// custs.push(new Customer('Eugene', 'Sheuchuk', 'Minks, Nemiga str, 58 - 29', 5896578));
// custs.push(new Customer('Vlad', 'Bizin', 'Minks, Independent str, 38 - 46', 8792541));
// custs.push(new Customer('Hanna', 'Black', 'Minks, Red str, 4 - 45', 9142365));
// custs.push(new Customer('Nick', 'Ivanov', 'Minks, Brick str, 3 - 78', 2456789));
//
// [...custs].sort(Customer.sort).forEach(c => c.print());
//
// custs.filter(item => item.account > 6000 && item.account < 6000000).forEach(c => c.print());
// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// interface ICar {
//     brand: string;
//     cylinderCount: number;
//     power: number;
// }
//
// class Car implements ICar {
//     brand: string;
//     cylinderCount: number;
//     power: number;
//
//     constructor(brand: string, cylinderCount: number, power: number) {
//         this.brand = brand;
//         this.cylinderCount = cylinderCount;
//         this.power = power;
//     }
//
//     print() {
//         console.log(`Brand - ${this.brand}, cylinderCount - ${this.cylinderCount}, power - ${this.power}`);
//     }
// }
//
// class Truck extends Car {
//     carrying: number;
//     constructor(brand: string, cylinderCount: number, power: number, carrying: number) {
//         super(brand, cylinderCount, power);
//         this.carrying = carrying;
//     }
//
//     setBrand(b: string) {
//         this.brand = b;
//     }
//
//     setCarrying(c: number) {
//         this.carrying = c;
//     }
// }


class Test {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log("Hello")
    }

    // sayHello2 = () => {
    //     console.log("arrow Hello")
    // }
}

let obj = new Test('Sergey', 43)
console.log(obj)
// obj.sayHello()
// // obj.sayHello2()
// obj.name="Alex"
// console.log(obj)

class Test2 extends Test{
public city
    constructor(name:string,age:number,city:string) {
        super(name,age);
        this.city=city

    }
    // sayHello() {
    //     super.sayHello()
    // }
    // sayHello2=()=>{
    //     console.log("Hellllllloooooooo")
    // }
    public say(){
    return this.city='Minsk'
    }

}
let obj2=new Test2('Alexis',17,'Borisov')
console.log(obj2)
console.log(obj2.city)
console.log(obj2.say())
console.log(obj2)
// obj2.sayHello2()
// obj2.sayHello()
// just a plug
export default () => {
};