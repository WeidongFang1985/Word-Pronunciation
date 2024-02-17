import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [word, setWord] = useState('');

  const speak = (lang) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = lang; // "en-US" for American English, "en-GB" for British English
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="App">
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="输入单词" />
      <button onClick={() => speak('en-GB')}>播放英式发音</button>
      <button onClick={() => speak('en-US')}>播放美式发音</button>
      <button onClick={() => speak('en-AU')}>播放澳式发音</button>
    </div>
  );
};

export default App;
