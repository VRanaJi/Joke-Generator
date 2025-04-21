const container = document.getElementById("container")
const btn = document.getElementById("btn")

const API_URL = `https://v2.jokeapi.dev/joke/Any?type=single`

getJoke()

async function getJoke(){
    const res = await fetch(API_URL)
    const data = await res.json()

    container.innerHTML = data.joke
}

btn.addEventListener("click", getJoke)