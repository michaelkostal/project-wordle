import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGame from '../EndGame';



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [ guesses, setGuesses ] = React.useState([]);
  const [ gameOver, setGameOver ] = React.useState(false);
  const [ winner, setWinner ] = React.useState(false);
  function handleSubmitGuess(tentativeGuess){
    setGuesses([...guesses,tentativeGuess]);
  }
  return <>
  <GuessResults guesses={guesses} answer={answer} />
  <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />
  <EndGame guesses={guesses} answer={answer} gameOver={gameOver} setGameOver={setGameOver} winner={winner} setWinner={setWinner} />
  </>
}

export default Game;
