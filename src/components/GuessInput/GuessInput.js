import React from 'react';

function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  return (
      <form autoComplete="off" className="tentativeGuess-input-wrapper"
          onSubmit={event => {
              event.preventDefault();
              handleSubmitGuess(tentativeGuess);
              setTentativeGuess('');

          }}
      >
          <label htmlFor="guess-input">Enter guess:</label>
          <input 
              required
              id="guess-input" 
              type="text"
              value={tentativeGuess}
              minLength={5}
              maxLength={5}
              pattern="[a-zA-Z]{5}"
              title="5 letter word"
              onChange={
                  event => {
                      const nextGuess = event.target.value.toUpperCase();
                      setTentativeGuess(nextGuess);
                  }
              }
          />
      </form>
  );
}

export default GuessInput;
