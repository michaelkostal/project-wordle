import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function EndGame({ guesses, answer, gameOver, setGameOver, winner, setWinner }){
  const attempts = guesses.length;
  guesses.forEach(guess => {
    if (guess === answer){
      setGameOver(true)
      setWinner(true)
    }
  })
  if (winner && attempts <= NUM_OF_GUESSES_ALLOWED){
    return <div className="happy banner">
    <p>Woohoo! It only took <strong>{attempts} guess{attempts === 1 ? '' : 'es'}</strong></p>
    </div>
  }
  if (attempts === NUM_OF_GUESSES_ALLOWED){
    setGameOver(true)
    return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  }


}

export default EndGame;
