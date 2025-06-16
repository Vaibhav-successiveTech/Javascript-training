const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Number ',(str)=>{
    const num = Number(str);
    oddEvenOneIteration(num);
    rl.close();
});

function oddEvenOneIteration(n){
    let flag = 1;
for(let i=-n ;i<=n ;i++){
    if(flag){
        if(Math.abs(i)%2==0)console.log(Math.abs(i));
    }else{
        if(Math.abs(i)%2==1)console.log(Math.abs(i));
    }

    if(i==0)flag = 0;
 }
}

// oddEvenOneIteration();
