import React from 'react';
import Header from './components/Header.js';
import Desc from './components/Hero.js';
import './App.css';
import { Box } from '@mui/system';
import Jaipur from './components/center/Jaipur';
import Noida from './components/center/Noida';
import ContactUs from './pages/ContactUs';
import Programmes from './pages/Programmes';
import Login from './pages/admin/Login';
import Queries from './pages/admin/Queries';
import CreateNews from './pages/admin/CreateNews.js';
import Logout from './pages/admin/Logout';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Gallery from './pages/Gallery.js';

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
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/auth/login' element={<Login />} />
						<Route path='/auth/queries' element={<Queries />} />
						<Route path='/auth/createnews' element={<CreateNews />} />
						<Route path='/auth/logout' element={<Logout />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</Router>
			</Box>
		</>
	);
}

export default App;
