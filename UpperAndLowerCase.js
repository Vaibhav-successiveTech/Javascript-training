const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter String ',(str)=>{
    console.log(UpperAndLowerCaseOfString(str));
    rl.close();
});

function UpperAndLowerCaseOfString(str){
    const upperCase = str.toUpperCase();
    const lowerCase = str.toLowerCase();
    return [upperCase,lowerCase];
}