let processingQueue = [];
let standByQueue = [];

function pushRequest(req){
    if(processingQueue.length >=5){
        standByQueue.push(req);
    }else{
        processingQueue.push(req);
    }
}

async function processRequest(){

    processingQueue.sort((a,b)=>a.id-b.id);
    let arr = processingQueue.map((a)=>a.promise);

    processingQueue = [];

    const data = await Promise.allSettled(arr);
    console.log(data);

    while(processingQueue.length < 5 && standByQueue.length >0){
        processingQueue.push(standByQueue.shift());
    }
    if(processingQueue.length > 0)processRequest();
}

for(let i=0;i<10;i++){
    let a = Math.round(Math.random()*10)
    let req = {
        id : a,
        promise : new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(`Resolved Promise Id : ${a} After ${i} sec`);
            },i*1000);
        })
    }
    pushRequest(req);
}

processRequest();