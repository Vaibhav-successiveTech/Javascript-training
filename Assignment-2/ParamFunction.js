function generateRandomNumber(){
    return Math.round(Math.random() * 100);
}

function square(paramFunction){
    let num = paramFunction();
    return (num*num)
}

let ans = square(generateRandomNumber);
console.log(ans);