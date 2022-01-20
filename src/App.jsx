import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './Home';

const theme = createTheme();

const App = () => {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</>
	);
};

export default App;
