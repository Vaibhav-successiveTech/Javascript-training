function removeIDKeys(arr){
    let ansArr = [];
    for(let i of arr){
        const {id,...rest} = i;
        ansArr.push(rest);
    }

    return ansArr;
}

let newArr = [];
for(let i=0;i<10;i++){
    newArr.push({
        name:'John',
        age:20 + Math.round(Math.random() * 10),
        id : Math.round(Math.random() * 10)
    })
}

console.log(removeIDKeys(newArr));