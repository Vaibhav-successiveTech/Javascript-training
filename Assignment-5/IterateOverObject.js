let obj = {
    name:'Vaibhav',
    age : 21,
    fn : function(){
        console.log('Hello World');
    },
    date : new Date(),
    innerObj : {
        val : 'ABC',
        innerFn : function(){console.log('This is inner function');}
    }
};

function iterateOverObject(obj){
    for(let key in obj){
        console.log(key,obj[key]);
    }
}

iterateOverObject(obj);