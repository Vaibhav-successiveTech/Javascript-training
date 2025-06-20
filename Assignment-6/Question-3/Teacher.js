import {Person} from './Person.js'
class Teacher extends Person{
    constructor(name,age,gender,subjectTaught){
        super(name,age,gender);
        this.subjectTaught = subjectTaught;
    }

    farewell(){
        console.log(`I teach ${this.subjectTaught}`);
    }

}

let teacher = new Teacher('abc',30,'Male','Physics');
teacher.farewell();