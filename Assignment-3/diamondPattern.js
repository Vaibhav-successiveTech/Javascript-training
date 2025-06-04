function printDiamondPattern(){
let obj = new Object();

for(let i=1;i<=5;i++){
    let str = '';
    for(let j=1;j<=i;j++){
        str+='* ';
    }
    obj[i]=str;
}

//console.log(obj);

for(let i=1;i<=5;i++){
    let gap = '';
    for(let j=0;j<5-(i%5);j++){
        gap+=' ';
    }
    if(i==5)continue;
    console.log(gap+obj[i%5]);
}

console.log(obj[5]);

for(let i=4;i>=1;i--){
    let gap = '';
    for(let j=5-i;j>=1;j--){
        gap+=' ';
    }
    console.log(gap+obj[i]);
 }
}

printDiamondPattern();