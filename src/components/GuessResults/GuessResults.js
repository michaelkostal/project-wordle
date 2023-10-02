import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((num) => (
        <p className="guess" key={num}>
          {range(numCols).map((num) => (
            <span className="cell" key={num}></span>
          ))}
        </p>
      ))}
    </div>
  );
}

function GuessResults({ guesses }) {
  return <div className="guess-results">
    <Grid
      numRows={NUM_OF_GUESSES_ALLOWED}
      numCols={5}
    />
    {guesses.map((guess, index) => {
      return <p className="guess" key={index}>{guess}</p>
    })}
  </div>;
}

export default GuessResults;