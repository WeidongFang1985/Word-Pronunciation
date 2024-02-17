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

  const languages = [
    { lang: 'en-GB', label: 'GB', color: 'primary' },
    { lang: 'en-US', label: 'US', color: 'secondary' },
    { lang: 'zh-CN', label: 'CN', color: 'error' },
  ];

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
          label="Please Enter the Word or Sentence"
          variant="outlined"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          margin="normal"
        />

        <Box display="flex" alignItems="center" paddingLeft="10px" gap={2}>
          {languages.map((language) => (
            <LanguageButton
              key={language.lang}
              lang={language.lang}
              label={language.label}
              color={language.color}
              word={word}
              onClick={speak}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default App;
