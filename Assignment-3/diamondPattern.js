const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter Number ',(str)=>{
    const num = Number(str);
    printDiamondPattern(num);
    rl.close();
});

function printDiamondPattern(n){
let obj = new Object();

for(let i=1;i<=n;i++){
    let str = '';
    for(let j=1;j<=i;j++){
        str+='* ';
    }
    obj[i]=str;
}


for(let i=1;i<=n;i++){
    let gap = '';
    for(let j=0;j<n-(i%n);j++){
        gap+=' ';
    }
    if(i==n)continue;
    console.log(gap+obj[i%n]);
}

console.log(obj[n]);

for(let i=n-1;i>=1;i--){
    let gap = '';
    for(let j=n-i;j>=1;j--){
        gap+=' ';
    }
    console.log(gap+obj[i]);
 }
}
