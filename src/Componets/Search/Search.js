import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LanguageButton from "../LanguageButton/LanguageButton";
import Container from "@mui/material/Container";
import {languages} from "../../Services/Languages";
import Typography from "@mui/material/Typography";
import {Slider} from "@mui/material";

const Search = () => {
	const [word, setWord] = useState('');
	const [rate, setRate] = useState(1);

	const speak = (lang, word) => {
		const speech = new SpeechSynthesisUtterance(word);
		speech.lang = lang;
		speech.rate = rate;
		window.speechSynthesis.speak(speech);
	};

	return (
		<div>
			<Container maxWidth="sm" style={{marginTop: '20px'}}>
				<TextField
					fullWidth
					label="Please Enter the Word or Sentence"
					variant="outlined"
					value={word}
					onChange={(e) => setWord(e.target.value)}
					margin="normal"
					type="search"
				/>

				<Box display="flex" alignItems="center" paddingLeft="10px" gap={2}>
					{languages.map((language) => (
						<LanguageButton
							key={language.lang}
							lang={language.lang}
							label={language.label}
							color={language.color}
							word={word}
							onClick={() => speak(language.lang, word)}
						/>
					))}
				</Box>

				<Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
					<Typography>Adjust Speech Rate</Typography>
					<Slider
						value={rate}
						onChange={(e, newValue) => setRate(newValue)}
						step={0.1}
						min={0.1}
						max={2}
						valueLabelDisplay="auto"
					/>
				</Box>
			</Container>
		</div>
	);
};

export default Search;
