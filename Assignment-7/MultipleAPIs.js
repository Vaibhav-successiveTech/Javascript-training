const url1 = "https://catfact.ninja/fact";
const url2 = "https://official-joke-api.appspot.com/random_joke";
const url3 = "https://api.zippopotam.us/us/33162";


async function multipleAPIs(){
    let p1 = await fetch(url1);
    let data1 = await p1.json();
    
    let p2 = await fetch(url2);
    let data2 = await p2.json();

    let p3 = await fetch(url3);
    let data3 = await p3.json();

    return {...data1,...data2,...data3}
}

multipleAPIs()
.then((res)=>console.log(res))
.catch((err)=>console.log(err));