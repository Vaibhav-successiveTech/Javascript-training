const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter String ',(str)=>{
    console.log(convertToCamelCase(str));
    rl.close();
});

function convertToCamelCase(str){
    let ans = '';
    let n = str.length;
    let i = 0;
    while(i<n){
        if(i+1<n && str.charAt(i)==' '){
            ans+=str.charAt(i+1).toUpperCase();
            i+=2;
        }else{
            ans+=str.charAt(i);
            i+=1;
        }
    }
    return ans;
}