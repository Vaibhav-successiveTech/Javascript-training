// let myObject = { name: 'John', age: 30 };
// for (let property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }


// In object, dot operator is used to access values with specific Key name but in this case
// property is a variable which is iterating over keys. It is not a name of key.

let myObject = {name : 'John',age : 30};
for(let property in myObject){
    console.log(property + ': ' + myObject[property]);
}