function copyObject(obj){
    let newObj = obj.hasOwnProperty('length')?[]:{};
    for(let i in obj){
        if(typeof(obj[i]) == "object"){
            newObj[i] = copyObject(obj[i]);
        }else{
            newObj[i] = obj[i];
        }
    }
    return newObj;
}

let obj1 = {
    name : 'Vaibhav',
    age : 21,
    fn : function(){
        console.log('Hello');
    },
    innerObj : {
        val1 :23,
        object : {
            val2 : 24,
            val3 : 25
        }
    },
    arr : [1,2,3]
}

let obj2 = copyObject(obj1);

obj2.arr[0] = 12;

obj1.age = 100;

console.log(obj1);
console.log(obj2);