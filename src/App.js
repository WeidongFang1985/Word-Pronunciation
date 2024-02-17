import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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

        <Box display="flex" alignItems="center" paddingLeft="10px" gap={2}>
          <Box display="flex" alignItems="center" gap={0.25}>
            <Typography color="primary">GB</Typography>
            <IconButton color="primary" onClick={() => speak('en-GB')}>
              <VolumeUpIcon />
            </IconButton>
          </Box>

          <Box display="flex" alignItems="center" gap={0.25}>
            <Typography color="secondary">US</Typography>
            <IconButton color="secondary" onClick={() => speak('en-US')}>
              <VolumeUpIcon />
            </IconButton>
          </Box>

          <Box display="flex" alignItems="center" gap={0.25}>
            <Typography sx={{ color: 'red' }}>CN</Typography>
            <IconButton sx={{ color: 'red' }} onClick={() => speak('zh-CN')}>
              <VolumeUpIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default App;
