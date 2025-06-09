function sortArray(arr){
    arr.sort((a,b)=>{
        return a.age-b.age;
    })
    
    return arr;
}

let newArr = [];
for(let i=10;i>=0;i--){
    newArr.push({
        name:'ABC',
        age: 20 + Math.ceil(Math.random()*10)
    });
}

console.log(sortArray(newArr));