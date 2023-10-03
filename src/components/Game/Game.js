import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGame from '../EndGame';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [ guesses, setGuesses ] = React.useState([]);
  const [ gameOver, setGameOver ] = React.useState(false);
  const [ winner, setWinner ] = React.useState(false);
  function handleSubmitGuess(tentativeGuess){
    const nextGuesses = [...guesses,tentativeGuess];
    const attempts = nextGuesses.length;
    setGuesses(nextGuesses);
    if (tentativeGuess === answer && attempts <= NUM_OF_GUESSES_ALLOWED){
      setGameOver(true);
      setWinner(true);
    } else if (attempts === NUM_OF_GUESSES_ALLOWED){
      setGameOver(true);
    }

  }


  return <>
  <GuessResults guesses={guesses} answer={answer} />
  <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />
  {gameOver && <EndGame winner={winner} guesses={guesses} answer={answer} />}
  </>
}

export default Game;
