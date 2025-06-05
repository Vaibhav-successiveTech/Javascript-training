const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter Array ',(str)=>{
    const splitArray = str.split(' ');
    const arr = splitArray.map(x => Number(x));
    console.log(indexOfDulpicatesInArray(arr));
    rl.close();
});

function indexOfDulpicatesInArray(arr){
    let n = arr.length;
    let idx = new Map();
    for(let i=0;i<n;i++){
        if(idx.has(arr[i])){
            return [idx.get(arr[i]),i];
        }else{
            idx.set(arr[i],i);
        }
    }
    return [-1,-1];
}
