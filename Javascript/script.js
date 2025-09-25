const jokeElement = document.getElementById('joke');
const generateJokeButton = document.getElementById('generate-joke');
function fetchJoke() {
  fetch('https://api.chucknorris.io/jokes/random') 
    .then(response => response.json()) 
    .then(data => {
      jokeElement.textContent = data.value;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      jokeElement.textContent = 'Oops! Something went wrong. Try again later.';
    });
}
generateJokeButton.addEventListener('click', fetchJoke);