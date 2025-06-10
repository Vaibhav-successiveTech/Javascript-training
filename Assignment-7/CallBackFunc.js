const url = "https://catfact.ninja/fact"

function fetchFacts(){
    const res = fetch(url);
    res.then((res)=>{
        const response = res.json();
        response.then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })
}

fetchFacts();