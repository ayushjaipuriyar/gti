import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './gallery.css';
import GalleryImageComponent from '../components/GalleryImageComponent';
const Gallery = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/v1/gallery/');
				const responseData = await response.json();
				if (!response.ok) {
					throw new Error(responseData);
				}
				// console.log(responseData.data.data);
				const loadedPhotos = [];
				for (const id in responseData.data.data) {
					loadedPhotos.push({
						name: responseData.data.data[id].name,
						image: responseData.data.data[id].image,
					});
				}
				if (loadedPhotos.length <= 10) {
					setData(loadedPhotos.reverse());
				} else {
					var finalPhotos = [];
					const i = Math.floor(Math.random() * (loadedPhotos.length - 10) + 1);
					finalPhotos = loadedPhotos.splice(i, i + 10);
					setData(finalPhotos.reverse());
				}
				if (!response.ok) {
					throw new Error(
						responseData.error.status +
							' ' +
							responseData.error.statusCode +
							' ' +
							responseData.message,
					);
				}
			} catch (error) {
				alert(error);
				console.log(error);
				setError(error);
			}
			setIsLoading(false);
		};
		sendRequest();
	}, [error]);

	return (
		<>
			<Grid
				container
				justifyContent='center'
				alignItems='stretch'
				sx={{ marginTop: '10vh' }}
			>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
					// bgcolor='lightblue'
				></Grid>
				<Grid item xs={12} sm={10} padding={1}>
					<section className='section'>
						<h1>Gallery</h1>
						<div className='grid'>
							{isLoading && (
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
									alt='spinner'
								/>
							)}

							{data.map(({ name, image }, i) => (
								<div key={i}>
									<GalleryImageComponent id={i} url={image} name={name} />
								</div>
							))}
						</div>
					</section>
				</Grid>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
					// bgcolor='lightblue'
				></Grid>
			</Grid>
		</>
	);
};

export default Gallery;
