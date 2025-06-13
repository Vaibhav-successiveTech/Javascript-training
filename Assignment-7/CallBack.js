const url = "https://catfact.ninja/fact";
function fetchData(){
    const response = fetch(url);
    const result = response.then((res)=>{return res.json();});
    result.then((data)=>{
        console.log(data);
    });
}

fetchData();