const readline = require('node:readline');
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});

rl.question('Enter Array ',(str)=>{
    const splitArray = str.split(' ');
    const arr = splitArray.map(x => Number(x));
    console.log(bubbleSort(arr));
    rl.close();
})

function bubbleSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}