const keys = document.querySelectorAll('.button');
const effect = document.querySelectorAll('nav>a');

//This section allows all the audio to be played.
console.log(keys);
console.log(effect);
function clickButton(e){
  console.log("clickButton has been reached");
  console.log(e.target);
  let buttonKey = e.target.dataset['button'];
  console.log(buttonKey);
  let audio = document.querySelector(`audio[data-button="${buttonKey}"]`);
  console.log(audio);
  audio.currentTime = 0;
  audio.play();

}

//This allows the audio to be played on click.
keys.forEach(function(key){
    key.addEventListener("click", clickButton);
    console.log(key);
});

//This allows the sections to switch.
function switchEffect(e){
  console.log("switchEffect has been reached");
  e.preventDefault();
  console.log(e.target);
  let movie = document.querySelector('#movie');
  let game = document.querySelector('#game');
  let quote = document.querySelector('#quote');
  console.log(movie);
  console.log(game);
  console.log(quote);
  let effect = e.target.dataset['effect'];
  console.log(`effect: ${effect}`);
  if(effect=="movie"){
    console.log(`I should be in movie: ${effect}`);
    movie.style.display = "flex";
    game.style.display = "none";
    quote.style.display = "none";
    return;
  }
  else if (effect=="game"){
    console.log(`I should be in game: ${effect}`);
    movie.style.display = "none";
    game.style.display = "flex";
    quote.style.display = "none";
    return;
}
  else (effect=="quote")
    console.log(`I should be in quote: ${effect}`);
    movie.style.display = "none";
    game.style.display = "none";
    quote.style.display = "flex";
}

//This allows the sections to switch when click on the navbar.
effect.forEach(function(effect){
  effect.addEventListener("click", switchEffect);
  console.log(effect);
});
