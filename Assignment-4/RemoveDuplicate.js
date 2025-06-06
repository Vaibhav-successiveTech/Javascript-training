const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter String ',(str) => {
    console.log(removeDuplicateFromString(str));
    rl.close();
});

function removeDuplicateFromString(str){
    let letters = new Set();
    let n = str.length;
    let ans = '';
    for(let i=0;i<n;i++){
        if(!letters.has(str.charAt(i))){
            ans+=str.charAt(i);
            letters.add(str.charAt(i));
        }
    }
    return ans;
}
