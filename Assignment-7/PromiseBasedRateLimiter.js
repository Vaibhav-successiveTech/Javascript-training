let limit = 3;
let q = [];
let current = 0;

function processRequest(req){
    current+=1;
    req()
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
    let req = () => {
        let id = i;
        return new Promise((resolve)=>{
            console.log(`started ${id}`);
            setTimeout(()=>{
                resolve(`Ended ${id}`);
            },5000);
        })
    }
    q.push(req);
}

dispatch();