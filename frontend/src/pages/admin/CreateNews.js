import { TextField, Box, Grid, Typography, Paper, Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNews = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (
			!sessionStorage.getItem('jwt') ||
			sessionStorage.getItem('jwt') === 'loggedout'
		) {
			navigate('/auth/login');
			console.log('Not authenticated');
		}
	}, [navigate]);
	const [values, setValues] = useState({
		name: '',
		description: '',
		imageCover: '',
		images: [],
	});
	const [nameerror, setNameerror] = useState('');
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
		const imgElement = document.getElementById('imageCover-img');
		if (imgElement) {
			imgElement.remove();
		}
		const divElement = document.getElementById('imageCover');
		const image = new Image();
		image.src = URL.createObjectURL(files[0]);
		image.id = 'imageCover-img';
		image.style.height = '200px';
		// image.style.width = '100px';
		divElement.appendChild(image);
	};

	const handleInputChangeImages = (e) => {
		const files = e.target.files;
		const prevImages = document.querySelectorAll('[id^="images-"]');
		if (prevImages.length !== 0) {
			for (let i = 0; i < prevImages.length; i++) {
				const imgElement = document.getElementById(`${prevImages[i].id}`);
				imgElement.remove();
			}
		}

		for (let i = 0; i < files.length; i++) {
			data.append(e.target.name, files[i]);
			const divElement = document.getElementById('images');
			const image = new Image();
			image.src = URL.createObjectURL(files[i]);
			image.id = `images-${i}`;
			image.style.height = '200px';
			divElement.appendChild(image);
		}
	};
	const submitHandler = async (event) => {
		event.preventDefault();
		setNameerror('');

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
			console.log(responseData);
			if (!response.ok) {
				setNameerror(responseData.error.errors.name.message);
				throw new Error(
					responseData.error.status +
						' ' +
						responseData.error.statusCode +
						' ' +
						responseData.message,
				);
			} else {
				setId(responseData.data.data.id);
				submitHandlerImage();
			}
		} catch (err) {
			console.log(err);
		}
	};

	const submitHandlerImage = async () => {
		setNameerror('');

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
			if (!response.ok) {
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
									error={nameerror === '' ? false : true}
									helperText={nameerror}
								/>
								<TextField
									id='outlined-basic'
									label='Description'
									name='description'
									onChange={handleInputChange}
									value={values.description}
									variant='outlined'
								/>
								<div id='imageCover'>
									<Button
										component='label'
										variant='outlined'
										startIcon={<UploadFileIcon />}
										sx={{ marginRight: '1rem', width: '100%' }}
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
									<p
										className='imageCover MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'
										id='outlined-basic-helper-text'
									></p>
								</div>
								<div id='images'>
									<Button
										component='label'
										variant='outlined'
										startIcon={<UploadFileIcon />}
										sx={{ marginRight: '1rem', width: '100%' }}
									>
										Upload Images
										<input
											type='file'
											accept='image/*'
											hidden
											max='3'
											multiple
											name='images'
											onChange={handleInputChangeImages}
										/>
									</Button>
									<p
										className='images MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'
										id='outlined-basic-helper-text'
									></p>
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
