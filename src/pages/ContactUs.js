import {
	TextField,
	Box,
	Grid,
	Typography,
	Paper,
	FormControl,
	TextareaAutosize,
} from '@mui/material';
import { color } from '@mui/system';
import React from 'react';

const ContactUs = () => {
	return (
		<>
			<Grid container justifyContent='center' alignItems='stretch'>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
					// bgcolor='lightblue'
				></Grid>
				<Grid item xs={12} sm={10} padding={2}>
					{/* <Paper elevation={3} sx={{ padding: '2%' }}> */}
					<Typography variant='h4' component='h2'>
						Contact us
					</Typography>
					<Grid container spacing={2} padding={2} justifyContent='center'>
						<Grid item xs={12} sm={10}>
							<Box
								sx={{
									p: 2,
									bgcolor: 'background.default',
									display: 'grid',
									gridTemplateColumns: { md: '1fr 1fr' },
									gap: 4,
									gapRow: 10,
								}}
							>
								<Paper sx={{ padding: 5 }}>
									<p>
										<Typography variant='h5' component='h2'>
											GAIL Training Institute Noida
										</Typography>
										<br></br>
										Plot No. 24, Sector 16A,
										<br></br>
										Noida
										<br></br>
										U.P. India
										<br></br>
										Pin code 201301
										<br></br>
										Phone nos.
										<a
											href='tel:01202515353'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											0120-2515353
										</a>
										/
										<a
											href='tel:01202515354'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											354
										</a>
										/
										<a
											href='tel:01202515355'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											355
										</a>{' '}
										/
										<a
											href='tel:01202515363'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											363
										</a>
										<br></br>
										Fax No.
										<a
											href='fax:01202511134'
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											0120-2511134
										</a>
										<br></br>
										E-mail :{' '}
										<a
											href='mailto:gti@gail.co.in'
											style={{ color: 'inherit' }}
										>
											gti@gail.co.in
										</a>
										<br></br>
										Website: www.gailonline.com
									</p>
								</Paper>
								<Paper sx={{ padding: 5 }}>
									<p>
										<Typography variant='h5' component='h2'>
											GAIL Training Institute Jaipur
										</Typography>
										<br></br>
										GAIL Vihar, Vidhyadhar Nagar Sector-6,
										<br></br>
										Jaipur
										<br></br>
										Rajasthan, India,
										<br></br>
										Pin code 302023
										<br></br>
										Phone nos.{' '}
										<a
											href='tel:01412230347'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											0141-2230347
										</a>{' '}
										/
										<a
											href='tel:01412230698'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											698
										</a>
										<br></br>
										Fax No.
										<a
											href='fax:01412230374'
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											0141-2230374
										</a>
										<br></br>
										E-mail :
										<a
											href='mailto:gti-jaipur@gail.co.in'
											style={{ color: 'inherit' }}
										>
											gti-jaipur@gail.co.in
										</a>
									</p>
								</Paper>
							</Box>
						</Grid>
						<Box sx={{ marginLeft: 2 ,marginTop:5}}>
							<Paper sx={{ padding: 5 }}>
								<Typography variant='h5' component='h2'>
									Query Submition
								</Typography>
								<Box
									component='form'
									sx={{
										'& .MuiTextField-root': { m: 1, width: '25ch' },
									}}
									noValidate
									autoComplete='off'
								>
									<FormControl>
										<TextField
											id='outlined-basic'
											label='Name'
											variant='outlined'
										/>
										<TextField
											id='outlined-basic'
											label='Designation'
											variant='outlined'
										/>
										<TextField
											id='outlined-basic'
											label='Organizatoin'
											variant='outlined'
										/>
										<TextField
											id='outlined-basic'
											label='Phone No'
											variant='outlined'
											inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
										/>

										<TextField
											id='outlined-basic'
											label='E-mail'
											variant='outlined'
										/>
										<TextareaAutosize
											aria-label='minimum height'
											minRows={3}
											placeholder='Query'
											style={{ width: 240, marginLeft: 8, marginTop: 8 }}
										/>
									</FormControl>
								</Box>
							</Paper>
						</Box>
					</Grid>
				</Grid>

				<Grid
					item
					xs={0}
					sm={1}
					// bgcolor='lightblue'
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>
			</Grid>
		</>
	);
};

export default ContactUs;
