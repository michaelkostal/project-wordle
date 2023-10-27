import React from 'react';

import Banner from '../Banner';
import PlayAgain from '../PlayAgain';

function WonBanner({numOfGuesses, handlePlayAgain}) {
  return <Banner status="happy">
    <p>Woohoo! It only took <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>. <PlayAgain handlePlayAgain={handlePlayAgain} /></p>
  </Banner>;
}

export default WonBanner;
