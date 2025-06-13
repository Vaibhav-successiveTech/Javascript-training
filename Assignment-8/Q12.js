// async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });

// return statement inside setTimeout doent return anything to outer function 
// so to return something we have to wrap it around a promise.

async function getData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([1,2,3,4]);
        },1000);
    });
}

getData().then((data)=>{
    console.log(data);
})