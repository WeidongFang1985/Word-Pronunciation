import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

const Header = () => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						Word Pronunciation
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
