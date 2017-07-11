class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
}

// const a = new Person('Ti', 30);
// console.log(a);
// a.sayHello();
class Child extends Person {
    constructor(nameChild, ageChild, hobby) {
        super(nameChild, ageChild);
        this.hobby = hobby;
    }

    sayHello() {
        super.sayHello();
        console.log('Hi, I am ' + this.name);
    }

    sayGoobye() {
        console.log('Bye!');
    }
}

const teo = new Child('Teo', 10, 'Car');
console.log(teo);
teo.sayHello();
teo.sayGoobye();