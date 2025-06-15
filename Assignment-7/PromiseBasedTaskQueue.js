let limit = 3;
let q = [];
let current = 0;

function processRequest(req){
    current+=1;
    req.fn()
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    .finally(()=>{
        current-=1;
        dispatch();
    })
}

function dispatch(){
    while(current < limit && q.length > 0){
        const task = q.shift();
        processRequest(task);
    }
}

for(let i=0;i<10;i++){
    let req = {
        id : Math.round(Math.random()*10),
        fn : function(){
            return new Promise((resolve)=>{
                console.log(`Started task ${i} with id ${this.id}`);
                setTimeout(()=>{
                    resolve(`Ended task ${i} with id ${this.id}`);
                },3000);
            })
        }
    }
    q.push(req);
}

q.sort((a,b)=>a.id-b.id);

dispatch();