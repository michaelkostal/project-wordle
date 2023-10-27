import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  
  const [guesses, setGuesses] = React.useState([]);
  
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const [answer, setAnswer] = React.useState(() => {
    const initialAnswer = sample(WORDS);
    console.info({ initialAnswer });
    return initialAnswer;
  })
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  function handlePlayAgain(){
    const nextAnswer = sample(WORDS);
    console.info({ nextAnswer });
    setAnswer(nextAnswer);
    setGameStatus('running');
    setGuesses([]);
  }
  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput 
      handleSubmitGuess={handleSubmitGuess} 
      gameStatus={gameStatus} 
      tentativeGuess={tentativeGuess} 
      setTentativeGuess={setTentativeGuess} 
    />
    <Keyboard 
      handleSubmitGuess={handleSubmitGuess} 
      guesses={guesses} 
      answer={answer} 
      tentativeGuess={tentativeGuess} 
      setTentativeGuess={setTentativeGuess} 
    />
    {gameStatus === 'won' && 
      <WonBanner 
        numOfGuesses={guesses.length} 
        handlePlayAgain={handlePlayAgain} 
      />
    }
    {gameStatus === 'lost' && 
      <LostBanner 
        answer={answer} 
        handlePlayAgain={handlePlayAgain} 
      />
    }
  </>
}

export default Game;
