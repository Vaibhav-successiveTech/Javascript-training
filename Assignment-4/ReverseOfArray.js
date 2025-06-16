const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Enter Array ',(str) =>{
    const splitArray = str.split(' ');
    const arr = splitArray.map(x => Number(x));
    console.log(reverseOfArray(arr));
    rl.close();
})

function reverseOfArray(arr){
    let n = arr.length;
    let ans = [];
    for(let i=n-1;i>=0;i--){
        ans.push(arr[i]);
    }
    return ans;
}
