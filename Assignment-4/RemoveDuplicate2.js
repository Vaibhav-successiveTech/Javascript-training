const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter Array ',(str)=>{
    const splitArray = str.split(' ');
    const arr = splitArray.map(x => Number(x));
    console.log(removeDuplicateFromArray(arr));
    rl.close();
});

function removeDuplicateFromArray(arr){
    let ans = [];
    let st = new Set();
    for(let i of arr){
        if(st.has(i))continue;
        ans.push(i);
        st.add(i);
    }
    return ans;
}
