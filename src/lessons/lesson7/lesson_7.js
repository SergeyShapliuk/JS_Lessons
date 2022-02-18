console.log('lesson7.1')

function Animal() {

    this.name = 'Animal'

    Animal.prototype.walk = function () {
        return console.log(`${this.name} walking`)
    }
    Animal.prototype.eat = function () {
        return console.log(`${this.name} eating`)
    }
    Animal.prototype.sleep = function () {
        return console.log(`${this.name} sleeping`)
    }
}

const animal = new Animal()
console.log(animal)
animal.walk()
animal.eat()
animal.sleep()

function Monkey(name) {
    Animal.call(this, name)
    this.name = name
}

Monkey.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Monkey

    },
    roar: {
        value: function () {
            return console.log(`${this.name} roared`)
        }
    },
    climb: {
        value: function () {
            return console.log(`${this.name} climbed`)
        }
    }
})
const monkey = new Monkey('Monkey')
console.log(monkey)

function Human(name) {
    Monkey.call(this, name)
    this.name = name
}

Human.prototype = Object.create(Monkey.prototype, {
    constructor: {
        value: Human
    },
    speak: {
        value: function () {
            return console.log(`${this.name} speaking`)
        }
    },
    think: {
        value: function () {
            return console.log(`${this.name} thinking`)
        }
    },
})
const human = new Human('Human')
console.log(human)

// Используя метод Apply реализовать свой собственный метод bind


Function.prototype.myBind=function (ctx,...args){
    const _this=this
    return function (...args2){
        return _this.apply(ctx,[...args,...args2])
    }
}
let obj={
    name:"Alex",
    sayName(){
        console.log(this.name)
    }
}
let obj2={
    name:"Sergey"
}
obj.sayName.myBind(obj2)()

Function.prototype.myCall=function (ctx,...args){
    ctx.__callFunc__=this
    return ctx.__callFunc__(...args)
}

obj.sayName.myCall(obj2)