import React from 'react';
import Header from './components/Header.js';
import Desc from './components/Hero.js';
import './App.css';
import { Box } from '@mui/system';
import Jaipur from './components/center/Jaipur';
import Noida from './components/center/Noida';
import ContactUs from './pages/ContactUs';
import Programmes from './pages/Programmes';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

function App() {
	return (
		<>
			<Box>
				<Router>
					<Header />
					<Routes>
						<Route exact path='/' element={<Desc />} />
						<Route path='/Home' element={<Desc />} />
						<Route path='/programmes' element={<Programmes />} />
						<Route path='/center/Noida' element={<Noida />} />
						<Route path='/center/Jaipur' element={<Jaipur />} />
						<Route path='/contactus' element={<ContactUs />} />
					</Routes>
				</Router>
			</Box>
		</>
	);
}

export default App;
