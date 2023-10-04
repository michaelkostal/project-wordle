import React from 'react';
import { checkGuess } from '../../game-helpers';
import './keyboard.css'

function KeyboardKey({ letter, status, tentativeGuess, setTentativeGuess }) {
  const className = status ? `${status} key` : 'key';
  return <button className={className} onClick={(event) => {
    const nextGuess = tentativeGuess;
    if (nextGuess.length < 5) {
      setTentativeGuess(tentativeGuess + letter);
    }
  }}>{letter}</button>
}

function Keyboard({ guesses, answer, tentativeGuess, setTentativeGuess, handleSubmitGuess }) {
  const QWERTY = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    'ZXCVBNM'
  ]
  const checkedGuesses = guesses.map(guess => {
    return checkGuess(guess, answer);
  })
  const result = [].concat(...checkedGuesses);
  return <div className="keyboard">
    {QWERTY.map((value, index) => {
      return <div className="keyboard-row" key={index}>
        {value.split('').map((letter) => {
          let status = undefined;
          result.forEach(item => {
            if (item.letter === letter) {
              status = item.status;
              return;
            }
          })
          return <KeyboardKey key={letter} letter={letter} status={status} tentativeGuess={tentativeGuess} setTentativeGuess={setTentativeGuess} />
        })}
      </div>
    })}
    <div className="keyboard-row">
      <button className="key" style={{ width: 120 }} onClick={() => {
        const nextGuess = tentativeGuess.slice(0, -1);
        if (nextGuess.length >= 0) {
          setTentativeGuess(nextGuess);
        }

      }}>Delete</button>
      <button className="key" style={{ width: 120 }} onClick={() => {
        if (tentativeGuess.length === 5) {
          handleSubmitGuess(tentativeGuess);
          setTentativeGuess('');
        } else {
          window.alert('Please enter five letters');
        }
      }}>Enter</button>
    </div>
  </div>;
}

export default Keyboard;
