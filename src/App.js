import React, { useEffect, useState } from 'react';
import './App.css';
import Figure from './components/Figure';

function App() {
  const randomWord = require('random-words');
  const [word, setWord] = useState(randomWord());
  const [correctChars, setCorrectChars] = useState([]);
  const [incorrectChars, setIncorrectChars] = useState([]);
  const [usedChars, setUsedChars] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [currentChar, setcurrentChar] = useState('');
  const [message, setMessage] = useState('');


  const finalWord = word.split('').map((char, index) =>
    (correctChars.includes(char) ? <p key={index}>{char}</p> : <p key={index}>{'_'}</p>))

  const ifGuessed = finalWord.map((char) => char.props.children).includes('_')
  
  const changeAttempts = () => {
    if (usedChars.map((char) => char).includes(currentChar) === false) {
      if (attempts > 0 && ifGuessed ) {
        if (word.includes(currentChar)) {
          setCorrectChars([...correctChars, currentChar]);
          setUsedChars([...usedChars, currentChar])
        } else if (!word.includes(currentChar)) {
          setIncorrectChars([...incorrectChars, currentChar]);
          setUsedChars([...usedChars, currentChar])
          setAttempts(attempts - 1);
        } 
      } 
    
    }
    
  }

  window.addEventListener('keydown', (e)  => {
    if (attempts > 0 && ifGuessed) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (usedChars.map((char) => char).includes(currentChar) === false) {
          setcurrentChar(e.key.toLowerCase())
        } 
      } 
    }
  });
  
  useEffect(() => {
    changeAttempts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChar])

  useEffect(() => {
    if (!attempts && ifGuessed) {
      setMessage('Nice Try!')
    } else if (attempts > 0 && !ifGuessed) {
      setMessage('Success!')
    }

  }, [attempts, ifGuessed])

  const handleReset = () => {
    setWord(randomWord());
    setCorrectChars([]);
    setIncorrectChars([]);
    setUsedChars([]);
    setAttempts(6);
    setcurrentChar('');
    setMessage('');
  }
 

  return (
    <div className="app">
      <h1 className='title'>THE HANGMAN GAME</h1>
      <div className="body-container">
        <div className="attempts-container">
          <h2 className='attempts'>{attempts}</h2>
          <Figure  attempts={attempts} />
        </div>
        <div className="mid-container">
          <h2 className="wrong-chars"> Wrong Letters: {incorrectChars.map((char) => `${char}, `)}
          </h2>

          <h2 className='message'>{message}</h2>
          {!attempts ? <h2 className='word-answer'>The word was "{word}".</h2> : 
          <h2 className="word">{finalWord}</h2>}

          {(!attempts || !ifGuessed) && 
          <button onClick={handleReset} className="restart-btn">Try Again!</button> }
        </div>
      </div>
    </div>
  );
}

export default App;

