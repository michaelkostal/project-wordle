import React from 'react';

function EndGame({ winner, guesses, answer }){
  const attempts = guesses.length;
  if (winner){
    return <div className="happy banner">
    <p>Woohoo! It only took <strong>{attempts} guess{attempts === 1 ? '' : 'es'}</strong></p>
    </div>
  } else {
    return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  }


}

export default EndGame;
