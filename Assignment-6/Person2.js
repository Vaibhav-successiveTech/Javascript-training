class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

    averageAge(arr){
        let n = arr.length;
        let sum = 0;
        for(let i of arr){
            sum+=i.age;
        }
        return Math.round(sum/n);
    }
};

let person = new Person('Vaibhav','Sharma',21);
person.fullName();
let arr = [];
for(let i=0;i<10;i++){
    let p1 = new Person('ABC','xyz',20+i);
    arr.push(p1);
}

console.log(`Average Age of Persons is ${person.averageAge(arr)}`);
