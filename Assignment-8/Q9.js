function Person(name, age) { this.name = name; this.age = age; }
//var person = Person("John Doe", 30);
// new keyword must be used to use the functions as constructor function and use its scope
var person = new Person('John Doe',30);
console.log(person.name);