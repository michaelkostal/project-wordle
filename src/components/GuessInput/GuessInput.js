import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
      <form className="guess-input-wrapper"
          onSubmit={event => {
              event.preventDefault();
              console.log({guess});
              setGuess('');
          }}
      >
          <label htmlFor="guess-input">Enter guess:</label>
          <input 
              required
              id="guess-input" 
              type="text"
              value={guess}
              minLength={5}
              maxLength={5}
              pattern="[a-zA-Z]{5}"
              title="5 letter word"
              onChange={
                  event => {
                      const nextGuess = event.target.value.toUpperCase();
                      setGuess(nextGuess);
                  }
              }
          />
      </form>
  );
}

export default GuessInput;
