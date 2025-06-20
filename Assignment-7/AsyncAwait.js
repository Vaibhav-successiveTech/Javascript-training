function returnPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Resolved After 2 seconds');
        },2000);
    });
}

callingFunction = async() => {
    let data = await returnPromise();
    console.log(data);
}

callingFunction();