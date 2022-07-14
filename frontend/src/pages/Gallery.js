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

							{/* {data.map(({ name, image }, i) => (
								<div key={i}>
									<GalleryImageComponent id={i} url={image} name={name} />
								</div>
							))} */}
							<div class='item'>
								<div class='item__details'>jelly-o brownie sweet</div>
							</div>
							<div class='item item--large'>
								<div class='item__details'>Muffin jelly gingerbread</div>
							</div>
							<div class='item item--medium'>
								<div class='item__details'>sesame snaps chocolate</div>
							</div>
							<div class='item item--large'>
								<div class='item__details'>Oat cake</div>
							</div>
							<div class='item item--full'>
								<div class='item__details'>jujubes cheesecake</div>
							</div>
							<div class='item item--medium'>
								<div class='item__details'>Dragée pudding brownie</div>
							</div>
							<div class='item item--large'>
								<div class='item__details'>Oat cake</div>
							</div>
							<div class='item'>
								<div class='item__details'>powder toffee</div>
							</div>
							<div class='item item--medium'>
								<div class='item__details'>pudding cheesecake</div>
							</div>
							<div class='item item--large'>
								<div class='item__details'>toffee bear claw</div>
							</div>
							<div class='item'>
								<div class='item__details'>cake cookie croissant</div>
							</div>
							<div class='item item--medium'>
								<div class='item__details'>liquorice sweet roll</div>
							</div>
							<div class='item item--medium'>
								<div class='item__details'>chocolate marzipan</div>
							</div>
							<div class='item item--large'>
								<div class='item__details'>danish dessert lollipop</div>
							</div>
							<div class='item'>
								<div class='item__details'>sugar plum dragée</div>
							</div>
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
