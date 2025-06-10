import {Person} from './Person.js'
class Student extends Person{
    constructor(name,age,gender,studies){
        super(name,age,gender);
        this.studies = studies;
    }
   
    greeting(){
        console.log(`This is ${this.name}. I study ${this.intrest}`);
    }
}

let student = new Student('Parth',22,'Male','Physics');
student.greeting();