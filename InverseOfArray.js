const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('enter Array ',(str)=>{
    const splitArray = str.split(' ');
    const arr = splitArray.map(x => Number(x));
    console.log(inverseOfArray(arr));
    rl.close();
});

function inverseOfArray(arr){
    let ans = [];
    let n = arr.length;
    for(let i=0;i<n;i++){
        ans[arr[i]]=i;
    }
    return ans;
}
