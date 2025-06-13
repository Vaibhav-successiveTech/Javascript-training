const url1 = "https://official-joke-api.appspot.com/random_joke";
const url2 = "https://catfact.ninja/fact";


async function fetchRandomJokes(){
    const response = await fetch(url1);
    const data = await response.json();
    console.log(data);
}

async function fetchFacts(){
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
}

fetchFacts();
fetchRandomJokes();
