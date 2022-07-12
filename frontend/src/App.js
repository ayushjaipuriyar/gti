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
import ProgrammesDash from './pages/admin/ProgrammesDash';
import GalleryDash from './pages/admin/GalleryDash';
import CreateNews from './pages/admin/CreateNews.js';
import GalleryCreateImage from './pages/admin/GalleryCreateImage.js';

import Logout from './pages/admin/Logout';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Gallery from './pages/Gallery.js';
import UpdateNews from './pages/admin/UpdateNews.js';

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
						<Route path='/auth' element={<Navigate to='/auth/login' />} />
						<Route path='/auth/login' element={<Login />} />
						<Route path='/auth/queries' element={<Queries />} />
						<Route path='/auth/Programmes' element={<ProgrammesDash />} />
						<Route path='/auth/createnews' element={<CreateNews />} />
						<Route path='/auth/updatenews' element={<UpdateNews />} />
						<Route path='/auth/gallery' element={<GalleryDash />} />
						<Route
							path='/auth/creategallery'
							element={<GalleryCreateImage />}
						/>
						<Route path='/auth/logout' element={<Logout />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</Router>
			</Box>
		</>
	);
}

export default App;
