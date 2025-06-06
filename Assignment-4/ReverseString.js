const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("Enter String ",(str)=>{
    console.log(reverseString(str));
    rl.close();
})

function reverseString(str){
    let arr = str.split(' ');
    let ans = '';
    for(let i of arr){
       ans+=i.split('').reverse().join('');
       ans+=' ';
    }
    return ans;
}