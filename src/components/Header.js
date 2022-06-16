import React, { useState, useRef } from 'react';
import {
	AppBar,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
	Paper,
	Button,
	Popper,
	MenuList,
	Grow,
	MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import DrawerComp from './Drawer';
const Header = () => {
	const pages = ['Products', 'Services', 'AboutUs', 'ContactUs'];
	const [value, setValue] = useState();
	const theme = useTheme();
	console.log(theme);
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	console.log(isMatch);
	return (
		<React.Fragment>
			<AppBar sx={{ background: '#063970' }}>
				<Toolbar>
					<AddBusinessRoundedIcon sx={{ transform: 'scale(2)' }} />
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
								textColor='#inherit'
								value={value}
								onChange={(e, value) => setValue(value)}
							>
								{pages.map((pages, index) => (
									<Link
										style={{ color: 'inherit', textDecoration: 'none' }}
										to={`/${pages}`}
									>
										<Tab label={pages}></Tab>
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
