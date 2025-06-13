// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000); 
// }

// as var is not blocked scope and it is hoisted. By the time setTimeout api is executed,value of 'i'
// becomes 10 and it exits the loop but as it is not blocked scope, 'i' in console.log(i) becomes 10 
// after 1 sec 

for(let i=0;i<10;i++){
    setTimeout(()=>console.log(i),1000);
}