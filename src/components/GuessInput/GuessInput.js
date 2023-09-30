import React from 'react';

function GuessInput({guess, setGuess}) {
  return (
      <form class="guess-input-wrapper"
          onSubmit={event => {
              event.preventDefault();
              if (guess.length !== 5){
                  window.alert('Please enter a five letter word.');
                  return;
              }

              console.log({guess});
              setGuess('');
          }}
      >
          <label for="guess-input">Enter guess:</label>
          <input 
              id="guess-input" 
              type="text"
              value={guess}
              maxLength="5"
              onChange={
                  event => {
                      setGuess(event.target.value.toUpperCase());
                  }
              }
          />
      </form>
  );
}

export default GuessInput;
