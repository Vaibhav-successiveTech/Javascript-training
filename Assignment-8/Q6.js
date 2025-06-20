// var person = { 
//     name: "John Doe", 
//     age: 30, 
//     getDetails: function() { 
//         console.log(this.name + " is " + this.age + " years old"); 
//     } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// person.getDetails();

// this.name and this.age is not accessable outside object so var getPersonDetails contains function
// from object but it dont have feilds like name and age in its execution context

// We can use Closure in this case

let person = {
    name : 'John Doe',
    age : 30,
    getDetails : function(){
        let name = this.name;
        let age = this.age;
        return () => {console.log(`${name} is ${age} years old`)}
    }
}

let getPersonDetails = person.getDetails();
getPersonDetails();