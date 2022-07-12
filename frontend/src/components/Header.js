import React, { useState } from 'react';
import {
	AppBar,
	Tab,
	Tabs,
	Toolbar,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DrawerComp from './Drawer';
const Header = () => {
	var location = useLocation().pathname;
	const auth = location.includes('/auth/');
	const pages = ['Home', 'Programmes', 'Gallery', 'ContactUs'];
	if (auth) {
		pages[1] = 'queries';
		pages[2] = 'programmes';
		pages[3] = 'gallery';
		pages[4] = 'logout';
	}
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<React.Fragment>
			<AppBar sx={{ background: '#93C3CE' }}>
				<Toolbar>
					<img src='/logo.png' height='50px' alt='logo' />
					{isMatch ? (
						<>
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
												key={pages}
											>
												<Tab label={pages} value={index} key={pages}></Tab>
											</Link>
									  ))
									: pages.map((pages, index) => (
											<Link
												style={{ color: 'inherit', textDecoration: 'none' }}
												to={`/${pages}`}
												key={pages}
											>
												<Tab label={pages} value={index} key={pages}></Tab>
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
