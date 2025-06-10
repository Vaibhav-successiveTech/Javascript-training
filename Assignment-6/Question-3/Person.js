export class Person{
    constructor(name,age,gender,intrest){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.intrest = intrest;
    }

    greeting(){
        console.log(`This is ${this.name}. I like ${this.intrest}`);
    }
    farewell(){
        console.log(`GoodBye from ${this.name}`);
    }
};

// let person = new Person('Parth',22,'Male','ABC');
// person.greeting();
// person.farewell();