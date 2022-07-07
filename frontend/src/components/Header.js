import React, { useState } from 'react';
import {
	AppBar,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import DrawerComp from './Drawer';
const Header = () => {
	var location = useLocation().pathname;
	// console.log(location.includes('/auth/'));
	// console.log(location.includes('/auth/'));
	// const pages = ['Home', 'Queries', 'Programmes', 'Logout'];
	const auth = location.includes('/auth/');
	const pages = ['Home', 'Services', 'AboutUs', 'ContactUs'];
	if (auth) {
		pages[1] = 'queries';
		pages[2] = 'programmes';
		pages[3] = 'logout';
	}
	const [value, setValue] = useState(0);
	const theme = useTheme();
	// console.log(theme);
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<React.Fragment>
			<AppBar sx={{ background: '#93C3CE' }}>
				<Toolbar>
					<img src='/logo.png' height='50px' alt='logo' />
					{/* <AddBusinessRoundedIcon sx={{ transform: 'scale(2)' }} /> */}
					{isMatch ? (
						<>
							<Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
								GTI
							</Typography>
							<DrawerComp />
						</>
					) : (
						<>
							<Tabs
								sx={{ marginLeft: 'auto' }}
								indicatorColor='secondary'
								value={value}
								onChange={(e, value) => setValue(value)}
							>
								{auth
									? pages.map((pages, index) => (
											<Link
												style={{ color: 'inherit', textDecoration: 'none' }}
												to={`/auth/${pages}`}
												key={index}
											>
												<Tab label={pages} key={index}></Tab>
											</Link>
									  ))
									: pages.map((pages, index) => (
											<Link
												style={{ color: 'inherit', textDecoration: 'none' }}
												to={`/${pages}`}
												key={index}
											>
												<Tab label={pages} key={index}></Tab>
											</Link>
									  ))}
							</Tabs>
						</>
					)}
				</Toolbar>
			</AppBar>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</React.Fragment>
	);
};

export default Header;
