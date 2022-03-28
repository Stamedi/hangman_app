import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Word.css';

function Word() {
  const finalWord = useSelector((state) => state.word.word);
  const correctChars = useSelector((state) => state.word.correctChars);
  return (
    <div className="container">
      {finalWord.split('').map((char, index) => (
        <span className="character" key={index}>
          {correctChars.includes(char) ? char : '_'}
        </span>
      ))}
    </div>
  );
}

export default Word;
