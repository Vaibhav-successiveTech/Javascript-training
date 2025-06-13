let processingQueue = [];
let standByQueue = [];
let n = 5;

function pushRequest(req){
    if(processingQueue.length >= 5){
        standByQueue.push(req);
    }else{
        processingQueue.push(req);
    }
}

async function processRequest(){
    let arr = processingQueue.map((a) => a.promise);
    processingQueue = [];
    const data = await Promise.allSettled(arr);
    console.log(data);

    while(processingQueue.length < 5 && standByQueue.length > 0){
        processingQueue.push(standByQueue.shift());
    }

    if(processingQueue.length > 0)processRequest();
}

for(let i=0;i<10;i+=1){
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Resolved After ${i} sec`)
        },i*1000);
    });
    let req = {
        id : i,
        promise: p
    }
    pushRequest(req);
}

processRequest();