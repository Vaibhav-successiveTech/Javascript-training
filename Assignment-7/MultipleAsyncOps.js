async function multipleAsyncOperations(){
const p1 = await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Promise1 Resolved After 1 sec');
    },1000);
});

const p2 = await new Promise((reject)=>{
    setTimeout(()=>{
        reject('Promise2 Rejected After 2 sec')
    },2000);
});

const p3 = await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Promise3 Resolved After 3 sec')
    },3000);
}); 

   return [p1,p2,p3];
} 

const promises = await multipleAsyncOperations();
const result = await Promise.allSettled(promises);
console.log(result);