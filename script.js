const jokeContainer = document.querySelector(".joke");
const jokeBtn = document.getElementById("btn");


const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const generateJoke = () => {
  jokeContainer.innerHTML = "";

fetch(url)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  jokeContainer.innerHTML = data.joke;
})
.catch((error) => {
  jokeContainer.innerHTML = "Failed to load joke";
  console.log(error);
})



}

jokeBtn.addEventListener('click', generateJoke);
generateJoke();