function superFunction(callBack1,callBack2){
    let n = Math.round(Math.random() * 10);
    let res = callBack1(n);
    let ans = callBack2(res);
    return ans;
}

console.log(superFunction((n)=>n*n,(m)=>2*m));