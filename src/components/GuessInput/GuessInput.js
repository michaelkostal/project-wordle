import React from 'react';

function GuessInput({ tentativeGuess, setTentativeGuess, handleSubmitGuess, gameOver }) {
  
  return (
    <form autoComplete="off" className="guess-input-wrapper"
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
        disabled={gameOver}
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
