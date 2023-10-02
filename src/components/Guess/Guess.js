import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }){
    const className = status ? `${status} cell` :'cell';
    return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);
  
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell 
          key={num} 
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;