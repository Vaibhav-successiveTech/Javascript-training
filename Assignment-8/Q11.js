var promise = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("Data received"); }, 1000);
 });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log("this is error",error);
//  });

// it is recommended to pass error into .catch block because passing error in .then block
//  will show error 
// when promise has error it will not catch error which rise in .then block;

promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("this is error",err);
})