import { TextField, Box, Grid, Typography, Paper, Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNews = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!sessionStorage.getItem('jwt')) {
			navigate('/auth/login');
			console.log('NOt auhtenticated');
			console.log(sessionStorage.getItem('jwt'));
		}
	}, [navigate]);
	const [values, setValues] = useState({
		name: '',
		description: '',
		imageCover: '',
		images: [],
	});
	const [errors, setErrors] = useState({
		name: '',
		description: '',
		imageCover: '',
		images: [],
	});
	const [id, setId] = useState('');
	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const data = new FormData();

	const handleInputChangeImage = (e) => {
		const files = e.target.files;
		data.append(e.target.name, files[0]);
	};

	const handleInputChangeImages = (e) => {
		const files = e.target.files;
		for (let i = 0; i < files.length; i++) data.append(e.target.name, files[i]);
	};
	const submitHandler = async (event) => {
		event.preventDefault();
		console.log(values);
		setErrors({
			name: '',
			description: '',
			imageCover: '',
			images: [],
		});
		try {
			const response = await fetch('http://localhost:5000/api/v1/news/', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Authorization: ('Bearer ', sessionStorage.getItem('jwt')),
				},
				body: JSON.stringify({
					name: values.name,
					description: values.description,
					imageCover: 'default.png',
				}),
			});

			const responseData = await response.json();
			setId(responseData.data.data.id);
			submitHandlerImage();
			if (!response.ok) {
				setErrors({
					name: '',
					description: '',
					imageCover: '',
					images: [],
				});
				throw new Error(
					responseData.error.status +
						' ' +
						responseData.error.statusCode +
						' ' +
						responseData.message,
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const submitHandlerImage = async () => {
		console.log(id);
		data.append('name', 'sidk updae not working');
		setErrors({
			name: '',
			description: '',
			imageCover: '',
			images: [],
		});
		try {
			const response = await fetch(`http://localhost:5000/api/v1/news/${id}`, {
				method: 'PATCH',
				credentials: 'include',
				headers: {
					// 'Content-Type': 'application/json; charset=utf-8',
					Authorization: ('Bearer ', sessionStorage.getItem('jwt')),
				},
				body: data,
			});

			const responseData = await response.json();
			console.log(responseData);
			if (!response.ok) {
				setErrors({
					name: '',
					description: '',
					imageCover: '',
					images: [],
				});
				throw new Error(
					responseData.error.status +
						' ' +
						responseData.error.statusCode +
						' ' +
						responseData.message,
				);
			}

			// console.log(errors);
		} catch (err) {
			console.log(err);
			// console.log(responseData);
		}
	};
	return (
		<Box>
			<Grid container justifyContent='center' alignItems='stretch'>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>

				<Grid item xs={12} sm={10} padding={1}>
					<Box sx={{ marginLeft: 2, marginTop: 5 }}>
						<Paper sx={{ padding: 3 }}>
							<Typography variant='h5' component='h2'>
								News Creation
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
									label='Description'
									name='description'
									onChange={handleInputChange}
									value={values.description}
									variant='outlined'
									error={errors.description === '' ? false : true}
									helperText={errors.description}
								/>
								<Button
									component='label'
									variant='outlined'
									startIcon={<UploadFileIcon />}
									sx={{ marginRight: '1rem' }}
								>
									Upload Image Cover
									<input
										type='file'
										accept='image/*'
										hidden
										name='imageCover'
										onChange={handleInputChangeImage}
									/>
								</Button>
								<Button
									component='label'
									variant='outlined'
									startIcon={<UploadFileIcon />}
									sx={{ marginRight: '1rem' }}
								>
									Upload Images
									<input
										type='file'
										accept='image/*'
										hidden
										multiple
										name='images'
										onChange={handleInputChangeImages}
									/>
								</Button>
								{/* <p
										class='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'
										id='outlined-basic-helper-text'
									>
										{errors.query}
                    
									</p> */}
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
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>
			</Grid>
		</Box>
	);
};

export default CreateNews;
