import React from 'react';
import Header from './components/Header.js';
import Desc from './components/Hero.js';
import './App.css';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

function App() {
	return (
		<>
			<Box>
				<Header />
				<Desc />
			</Box>
		</>
	);
}

export default App;
