import { TextField, Box, Grid, Typography, Paper, Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateNews = () => {
	const { state } = useLocation();
	const { newsid } = state;
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

	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					`http://localhost:5000/api/v1/news/${newsid}`,
				);
				const responseData = await response.json();
				console.log(responseData.data.data);
				setValues({
					name: responseData.data.data.name,
					description: responseData.data.data.description,
					imageCover: responseData.data.data.imageCover,
					images: responseData.data.data.images,
				});
				const divElement = document.getElementById('imageCover');
				const image = new Image();
				image.src = URL.createObjectURL(values.imageCover);
				image.id = 'imageCover-img';
				image.style.height = '200px';
				divElement.appendChild(image);
				const divElements = document.getElementById('imageCover');
				for (let i = 0; i < values.images.length; i++) {
					const image = new Image();
					image.src = URL.createObjectURL(values.images[i]);
					image.id = `images-${i}`;
					image.style.height = '200px';
					divElements.appendChild(image);
				}
				if (!response.ok) {
					throw new Error(responseData);
				}
			} catch (error) {
				console.log(error.message);
				// setError(error.message);
			}
			setIsLoading(false);
		};
		sendRequest();
	}, [newsid]);

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const updatedData = new FormData();

	const handleInputChangeImage = (e) => {
		updatedData.delete(e.target.name);
		const files = e.target.files;
		updatedData.append(e.target.name, files[0]);
		const imgElement = document.getElementById('imageCover-img');
		if (imgElement) {
			imgElement.remove();
		}
		const divElement = document.getElementById('imageCover');
		const image = new Image();
		image.src = URL.createObjectURL(files[0]);
		image.id = 'imageCover-img';
		image.style.maxHeight = '200px';
		divElement.appendChild(image);
	};

	const handleInputChangeImages = (e) => {
		updatedData.delete(e.target.name);
		const files = e.target.files;
		const prevImages = document.querySelectorAll('[id^="images-"]');
		if (prevImages.length !== 0) {
			for (let i = 0; i < prevImages.length; i++) {
				const imgElement = document.getElementById(`${prevImages[i].id}`);
				imgElement.remove();
			}
		}

		for (let i = 0; i < files.length; i++) {
			updatedData.append(e.target.name, files[i]);
			const divElement = document.getElementById('images');
			const image = new Image();
			image.src = URL.createObjectURL(files[i]);
			image.id = `images-${i}`;
			image.style.maxHeight = '200px';
			divElement.appendChild(image);
		}
	};
	const submitHandler = async (event) => {
		event.preventDefault();
		setNameerror('');
		updatedData.delete('name');
		updatedData.delete('description');
		updatedData.append('name', values.name);
		updatedData.append('description', values.description);
		try {
			const response = await fetch(
				`http://localhost:5000/api/v1/news/${newsid}`,
				{
					method: 'PATCH',
					credentials: 'include',
					headers: {
						// 'Content-Type': 'application/json; charset=utf-8',
						Authorization: ('Bearer ', sessionStorage.getItem('jwt')),
					},
					body: updatedData,
				},
			);

			const responseData = await response.json();
			console.log(responseData);
			// submitHandlerImage();
			if (!response.ok) {
				setNameerror(responseData.error.errors.name.message);
				throw new Error(
					responseData.error.status +
						' ' +
						responseData.error.statusCode +
						' ' +
						responseData.message,
				);
			}
		} catch (err) {
			// console.log(err);
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
							{isLoading && (
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
									alt='spinner'
								/>
							)}

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
											multiple
											max='3'
											name='images'
											onChange={handleInputChangeImages}
										/>
									</Button>
									<p
										className='imageCover MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'
										id='outlined-basic-helper-text'
									></p>
								</div>
							</Box>
							<Button
								variant='outlined'
								onClick={submitHandler}
								style={{ marginLeft: '47%' }}
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

export default UpdateNews;
