import React from 'react';
import Header from './components/Header.js';
import Desc from './components/Hero.js';
import './App.css';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import Jaipur from './components/center/Jaipur.js';

function App() {
	return (
		<>
			<Box>
				<Header />
				<Desc />
				{/* <Jaipur/> */}
			</Box>
		</>
	);
}

export default App;
