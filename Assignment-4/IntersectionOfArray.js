const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let array1 = [];
let array2 = [];

rl.question('Enter first Array ', (str)=>{
    const splitArray1 = str.split(' ');
    array1 = splitArray1.map(x => Number(x));

    rl.question('Enter second Array ',(str2)=>{
        const splitArray2 = str2.split(' ');
        array2 = splitArray2.map(x => Number(x));

        console.log(intersectionOfArrays(array1,array2));
        rl.close();
    });
    
});

function intersectionOfArrays(arr1,arr2){
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    
    let i=0,j=0;
    let n1= arr1.length,n2 = arr2.length;

    let ans = [];

    while(i<n1 && j<n2){
        if(arr1[i]==arr2[j]){
            ans.push(arr1[i]);
            i+=1;
            j+=1;
        }else if(arr1[i]<arr2[j])i+=1;
        else j+=1;
    }

    return ans;
}

//console.log(intersectionOfArrays([1,2,3,2,1],[3,3,2,2,3,1,1,4,5,6]));