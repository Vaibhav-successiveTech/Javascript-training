function printPrime(){
    let arr = [];
for(let i=1;i<=50;i++){
    arr.push(i);
}

let i=0;
for(let i=1;i<50;i++){
    if(arr[i]!=-1){
        for(let j=i+arr[i];j<50;j+=arr[i]){
            arr[j] = -1;
        }
    }
}

for(let i of arr){
    if(i>-1)console.log(i);
}
}

printPrime();