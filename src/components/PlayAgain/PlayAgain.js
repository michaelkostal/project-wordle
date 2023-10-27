import React from 'react';

function PlayAgain({handlePlayAgain}){
  return <button style={{'textDecoration':'underline'}} onClick={(event) => {
    handlePlayAgain();
  }}>Play again</button>
}

export default PlayAgain;
