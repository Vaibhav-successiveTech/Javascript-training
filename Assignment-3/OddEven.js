const readline = require('node:readline');
const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question('Enter Number ',(str)=>{
   const num = Number(str);
   oddEven(num);
   rl.close();
});

function oddEven(n){
 for(let i=0;i<=n;i+=2){
    console.log(i);
}
 for(let i=1;i<=n;i+=2){
    console.log(i);
 }
}