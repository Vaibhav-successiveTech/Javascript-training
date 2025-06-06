const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
rl.question(`Enter Array `, str => {
    const arr = str.split(' ');
    console.log(`Sum of Array is  ${Sum(str)}`);
    rl.close();
  });


function Sum(arr){
    let sum = 0;
    for(let i of arr){
        sum+=Number(i);
    }
    return sum;
}


