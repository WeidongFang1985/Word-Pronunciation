// App.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LanguageButton from "./LanguageButton";

const App = () => {
  const [word, setWord] = useState('');

  const speak = (lang, word) => {
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

        <Box display="flex" alignItems="center" paddingLeft="10px" gap={2}>
          <LanguageButton lang="en-GB" label="GB" color="primary" word={word} onClick={speak} />
          <LanguageButton lang="en-US" label="US" color="secondary" word={word} onClick={speak} />
          <LanguageButton lang="zh-CN" label="CN" color="error" word={word} onClick={speak} />
        </Box>
      </Container>
    </div>
  );
};

export default App;
