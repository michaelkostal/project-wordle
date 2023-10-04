import React from 'react';

function PlayAgain({handlePlayAgain}){
  return <button style={{'textDecoration':'underline'}} onClick={(event) => {
    handlePlayAgain();
  }}>Play again</button>
}

function EndGame({ winner, guesses, answer, handlePlayAgain }){
  const attempts = guesses.length;
  if (winner){
    return <div className="happy banner">
      <p>Woohoo! It only took <strong>{attempts} guess{attempts === 1 ? '' : 'es'}</strong>. <PlayAgain handlePlayAgain={handlePlayAgain} /></p>
    </div>
  } else {
    return <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>. <PlayAgain handlePlayAgain={handlePlayAgain} /></p>
    </div>
  }


}

export default EndGame;
