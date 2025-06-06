function concatinateArray(arr){
    let m = arr.length;

    let ans = [];
    for(let i=0;i<m;i++){
        for(let j=0;j<arr[i].length;j++){
            ans.push(arr[i][j]);
        }
    }
    return ans;
}

console.log(concatinateArray([[1,2,3],[4,5],[6,7],[8,9,10]]));