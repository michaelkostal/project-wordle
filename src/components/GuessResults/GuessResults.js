import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';



function GuessResults({ guesses }) {
  return <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowNum) => (
        <p className="guess" key={rowNum}>
          {range(5).map((colNum, index) => (
            <span className="cell" key={colNum}>{guesses[rowNum] && (guesses[rowNum]).charAt(index)}</span>
          ))}
        </p>
      ))}
    </div>
}

export default GuessResults;