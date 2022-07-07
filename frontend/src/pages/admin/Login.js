import { Grid, Paper, TextField, Button, Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Admin = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
	const navigate = useNavigate();
	const [values, setValues] = useState({
		email: 'admin1@gmail.com',
		password: 'test12345',
	});
	const [errors, setErrors] = useState({
		email: '',
		password: '',
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
			email: '',
			password: '',
		});
		try {
			const response = await fetch(
				'http://localhost:5000/api/v1/users/login/',

				{
					method: 'POST',
					mode: 'cors',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
					},
					body: JSON.stringify({
						email: values.email,
						password: values.password,
					}),
				},
			);
			const responseData = await response.json();
			// console.log(responseData.token);
			console.log(responseData);
			let token = JSON.stringify(responseData.token);
			// localStorage.setItem('user', token);
			sessionStorage.setItem('jwt', token);
			navigate('/auth/queries');
			// setCookie('jwt', token);
			// console.log(cookies.jwt);

			if (!response.ok) {
				setErrors({
					email: responseData.message,
					password: responseData.message,
				});
				throw new Error(
					responseData.error.status + ' ' + responseData.error.statusCode,
				);
			}

			// console.log(errors);
		} catch (err) {
			console.log(err);
			// console.log(responseData);
		}
	};
	return (
		<>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
			>
				<Grid item sm={4} xs={1}></Grid>
				<Grid item sm={4} xs={10}>
					<Paper sx={{ padding: 3 }}>
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
								label='Email'
								name='email'
								onChange={handleInputChange}
								value={values.email}
								variant='outlined'
								error={errors.email === '' ? false : true}
								helperText={errors.email}
							/>
							<TextField
								id='outlined-basic'
								label='Password'
								name='password'
								onChange={handleInputChange}
								value={values.password}
								variant='outlined'
								error={errors.password === '' ? false : true}
								helperText={errors.password}
							/>
						</Box>
						<Button
							variant='outlined'
							onClick={submitHandler}
							style={{ marginLeft: '42%' }}
						>
							Submit
						</Button>
					</Paper>
				</Grid>
				<Grid item sm={4} xs={1}></Grid>
			</Grid>
		</>
	);
};

export default Admin;
