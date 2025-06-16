const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter Number ",(str)=>{
    const num = Number(str);
    printFibbonaci(num);
    rl.close();
});

function printFibbonaci(n){
    let a = 0,b=1;
for(let i=0;i<20;i++){
    console.log(a);
    let temp = b;
    b+=a;
    a=temp;
 }
}
