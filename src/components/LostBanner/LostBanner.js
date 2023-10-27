import React from 'react';

import Banner from '../Banner';
import PlayAgain from '../PlayAgain';

function LostBanner({answer,handlePlayAgain}) {
  return <Banner status="sad">
    <p>Sorry, the correct answer is <strong>{answer}</strong>. <PlayAgain handlePlayAgain={handlePlayAgain} /></p>
  </Banner>;
}

export default LostBanner;
