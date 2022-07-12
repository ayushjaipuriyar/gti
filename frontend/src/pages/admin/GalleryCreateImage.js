import { TextField, Box, Grid, Typography, Paper, Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryCreateImage = () => {
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
		image: '',
	});
	const [nameerror, setNameError] = useState('');
	const [imageerror, setImageError] = useState('');

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

	const submitHandlerImage = async () => {
		data.append('name', values.name);
		setNameError('');
		setImageError('');
		try {
			const response = await fetch(`http://localhost:5000/api/v1/gallery/`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					// 'Content-Type': 'application/json; charset=utf-8',
					Authorization: ('Bearer ', sessionStorage.getItem('jwt')),
				},
				body: data,
			});

			const responseData = await response.json();
			console.log(responseData);
			if (response.ok) {
				alert('Image Submitted');
			}
			if (!response.ok) {
				// console.log(responseData.error.errors.image.message);
				// alert(`Something went wrong ${responseData.message} `);
				setNameError(responseData.error.errors.name.message);
				setImageError(responseData.error.errors.image.message);
				console.log(nameerror, imageerror);
				throw new Error(
					responseData.error.status +
						' ' +
						responseData.error.statusCode +
						' ' +
						responseData.message,
				);
			}

			data.delete('name');
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
								Gallery Image Upload
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
								<div style={{ width: '100%' }} id='imageCover'>
									<Button
										component='label'
										variant='outlined'
										startIcon={<UploadFileIcon />}
										sx={{
											marginRight: '1rem',
											width: '100%',
											height: '4em',
										}}
									>
										Upload Image Cover
										<input
											type='file'
											accept='image/*'
											hidden
											name='image'
											onChange={handleInputChangeImage}
										/>
									</Button>
									<p
										className='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'
										id='outlined-basic-helper-text'
									>
										{imageerror}
									</p>
								</div>
							</Box>
							<Button
								variant='outlined'
								onClick={submitHandlerImage}
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

export default GalleryCreateImage;
