const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter Array ',(str)=>{
    const splitArray = str.split(' ');
    const arr = splitArray.map(x => Number(x));
    console.log(indexOfLastDuplicate(arr));
    rl.close();
});

function indexOfLastDuplicate(arr){
    let n = arr.length;
    let st = new Map();
    let ans = [];
    for(let i=0;i<n;i++){
        if(st.has(arr[i])){
            st.get(arr[i])[1]+=1;
            st.get(arr[i])[0]=i;
        }else{
            st.set(arr[i],[i,1]);
        }
    }
    for(let [key,val] of st){
        if(val[1]>1){
            ans.push(val[0]);
        }
    }
    return ans;
}