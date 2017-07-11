class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
}

Person.prototype.sayGoodbye = function() {
    console.log('Bye');
}

const a = new Person('Pho', 18);

a.sayGoodbye();

a.height = 160;
