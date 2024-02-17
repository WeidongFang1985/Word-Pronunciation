import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Box from "@mui/material/Box";

const LanguageButton = ({lang, label, color, word, onClick}) => {
	return (
		<Box display="flex" alignItems="center" gap={0.25}>
			<Typography color={color}>{label}</Typography>
			<IconButton color={color} onClick={() => onClick(lang, word)}>
				<VolumeUpIcon/>
			</IconButton>
		</Box>
	);
};

export default LanguageButton;
