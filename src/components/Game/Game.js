import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGame from '../EndGame';
import Keyboard from '../Keyboard';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [winner, setWinner] = React.useState(false);
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const [answer, setAnswer] = React.useState(() => {
    const initialAnswer = sample(WORDS);
    console.info({ initialAnswer });
    return initialAnswer;
  })
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    const attempts = nextGuesses.length;
    setGuesses(nextGuesses);
    if (tentativeGuess === answer && attempts <= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
      setWinner(true);
    } else if (attempts === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  }
  function handlePlayAgain(){
    const nextAnswer = sample(WORDS);
    console.info({ nextAnswer });
    setAnswer(nextAnswer);
    setGameOver(false);
    setWinner(false);
    setGuesses([]);
  }
  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} tentativeGuess={tentativeGuess} setTentativeGuess={setTentativeGuess} />
    <Keyboard handleSubmitGuess={handleSubmitGuess} guesses={guesses} answer={answer} tentativeGuess={tentativeGuess} setTentativeGuess={setTentativeGuess} />
    {gameOver && <EndGame winner={winner} guesses={guesses} answer={answer} handlePlayAgain={handlePlayAgain} />}
  </>
}

export default Game;
