import React from 'react';

function GuessResults({guesses}) {
  return <div class="guess-results">
  {guesses.map(({guess, id}) =>{
    return <p class="guess" key={id}>{guess}</p>
  })}
</div>;
}

export default GuessResults;
