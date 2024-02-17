import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const App = () => {
  const [word, setWord] = useState('');

  const speak = (lang) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = lang;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Word Pronunciation
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <TextField
          fullWidth
          label="输入单词"
          variant="outlined"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={() => speak('en-GB')} style={{ marginRight: '10px' }}>
          播放英式发音
        </Button>
        <Button variant="contained" color="secondary" onClick={() => speak('en-US')}>
          播放美式发音
        </Button>
      </Container>
    </div>
  );
};

export default App;
