import {
	TextField,
	Box,
	Grid,
	Typography,
	Paper,
	TextareaAutosize,
	Button,
} from '@mui/material';
import React, { useState } from 'react';

const ContactUs = () => {
	const [values, setValues] = useState({
		name: '',
		designation: '',
		organization: '',
		phoneno: '',
		email: '',
		query: '',
	});
	const [errors, setErrors] = useState({
		name: '',
		designation: '',
		organization: '',
		phoneno: '',
		email: '',
		query: '',
	});
	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const submitHandler = async (event) => {
		event.preventDefault();
		setErrors({
			name: '',
			designation: '',
			organization: '',
			phoneno: '',
			email: '',
			query: '',
		});
		try {
			const response = await fetch('http://localhost:5000/api/v1/query/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					// 'X-]Content-Type-Options': 'nosniff',
				},
				body: JSON.stringify({
					name: values.name,
					designation: values.designation,
					organization: values.organization,
					phoneno: values.phoneno,
					email: values.email,
					query: values.query,
				}),
			});

			const responseData = await response.json();
			console.log(responseData);
			console.log(responseData.error.errors.name.message);
			setErrors({
				name: responseData.error.errors.name.message,
				designation: responseData.error.errors.designation.message,
				organization: responseData.error.errors.organization.message,
				phoneno: responseData.error.errors.phoneno.message,
				email: responseData.error.errors.email.message,
				query: responseData.error.errors.query.message,
			});
			if (!response.ok) {
				setErrors({
					name: responseData.error.errors.name.message,
					designation: responseData.error.errors.designation.message,
					organization: responseData.error.errors.organization.message,
					phoneno: responseData.error.errors.phoneno.message,
					email: responseData.error.errors.email.message,
					query: responseData.error.errors.query.message,
				});
				throw new Error(
					responseData.error.status + ' ' + responseData.error.statusCode,
				);
			}

			// console.log(errors);
		} catch (err) {
			console.log(errors);
			console.log(err);
			// console.log(responseData);
		}
	};
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
									bgcolor: 'background.default',
									display: 'grid',
									gridTemplateColumns: { md: '1fr 1fr' },
									gap: 4,
									gapRow: 10,
								}}
							>
								<Paper sx={{ padding: 3 }}>
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
											style={{ color: 'inherit' }}
										>
											0120-2515353
										</a>
										/
										<a
											href='tel:01202515354'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ color: 'inherit' }}
										>
											354
										</a>
										/
										<a
											href='tel:01202515355'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ color: 'inherit' }}
										>
											355
										</a>{' '}
										/
										<a
											href='tel:01202515363'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ color: 'inherit' }}
										>
											363
										</a>
										<br></br>
										Fax No.
										<a href='fax:01202511134' style={{ color: 'inherit' }}>
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
								<Paper sx={{ padding: 3 }}>
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
											style={{ color: 'inherit' }}
										>
											0141-2230347
										</a>{' '}
										/
										<a
											href='tel:01412230698'
											onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
											style={{ color: 'inherit' }}
										>
											698
										</a>
										<br></br>
										Fax No.
										<a href='fax:01412230374' style={{ color: 'inherit' }}>
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
						<Box sx={{ marginLeft: 2, marginTop: 5 }}>
							<Paper sx={{ padding: 3 }}>
								<Typography variant='h5' component='h2'>
									Query Submition
								</Typography>
								<Box
									component='form'
									sx={{
										p: 2,
										bgcolor: 'background.default',
										display: 'grid',
										gridTemplateColumns: { md: '1fr 1fr' },
										gap: 4,
										gapRow: 10,
									}}
									noValidate
									autoComplete='off'
								>
									<TextField
										id='outlined-basic'
										label='Name'
										name='name'
										onChange={handleInputChange}
										value={values.name}
										variant='outlined'
										error={errors.name === '' ? false : true}
										helperText={errors.name}
									/>
									<TextField
										id='outlined-basic'
										label='Designation'
										name='designation'
										onChange={handleInputChange}
										value={values.designation}
										variant='outlined'
										error={errors.designation === '' ? false : true}
										helperText={errors.designation}
									/>
									<TextField
										id='outlined-basic'
										label='Organization'
										name='organization'
										onChange={handleInputChange}
										value={values.organization}
										variant='outlined'
										error={errors.organization === '' ? false : true}
										helperText={errors.organization}
									/>
									<TextField
										id='outlined-basic'
										label='Phone No'
										name='phoneno'
										onChange={handleInputChange}
										value={values.phoneno}
										variant='outlined'
										inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
										error={errors.phoneno === '' ? false : true}
										helperText={errors.phoneno}
									/>

									<TextField
										id='outlined-basic'
										label='E-mail'
										name='email'
										onChange={handleInputChange}
										value={values.email}
										variant='outlined'
										error={errors.email === '' ? false : true}
										helperText={errors.email}
									/>
									<div>
										<TextareaAutosize
											aria-label='minimum height'
											minRows={2}
											placeholder='Query'
											name='query'
											onChange={handleInputChange}
											value={values.query}
											style={{ height: '5vh', width: '97%' }}
										/>
										<p
											class='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'
											id='outlined-basic-helper-text'
										>
											{errors.query}
										</p>
									</div>
								</Box>
								<Button
									variant='outlined'
									onClick={submitHandler}
									style={{ marginLeft: '20vw' }}
								>
									Submit
								</Button>
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
