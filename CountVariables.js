const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter String ',(str)=>{
    console.log(countVariablesInString(str));
    rl.close();
})

function countVariablesInString(str){
    let order = '';
    let n = str.length;
    let freq = new Map();
    for(let i=0;i<n;i++){
        let char = str.charAt(i);
        if(!order.includes(char)){
            order+=char;
        }

        if(freq.has(char)){
            freq.set(char,freq.get(char)+1);
        }else{
            freq.set(char,1);
        }
        
    }
    let ans = '';
    for(let i=0;i<order.length;i++){
        ans+=order.charAt(i);
        ans+=freq.get(order.charAt(i)).toString();
    }
    return ans;
}