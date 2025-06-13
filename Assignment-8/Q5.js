let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}
// Accessing Elements Outside array range
//let myNumber = myArray[5];

let myNumber = myArray[3];
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The number is undefined');
}

