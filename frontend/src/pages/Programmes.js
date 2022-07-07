import { Card, Paper, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import ImageComponent from '../components/ImageComponent';
const Programmes = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	
	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/v1/news');
				const responseData = await response.json();
				if (!response.ok) {
					throw new Error(responseData);
				}
				// console.log(responseData.data.data);
				const loadedNews = [];
				for (const id in responseData.data.data) {
					loadedNews.push({
						id: responseData.data.data[id].id,
						name: responseData.data.data[id].name,
						description: responseData.data.data[id].description,
						imageCover: responseData.data.data[id].imageCover,
						images: responseData.data.data[id].images,
					});
				}
				// console.log(loadedNews);
				setData(loadedNews.reverse());
				// console.log(data);
			} catch (error) {
				// console.log(error.message);
				// setError(error.message);
			}
			setIsLoading(false);
		};
		sendRequest();
	}, [error]);
	console.log('Here is loading', isLoading);
	console.log('Here is data', data);
	return (
		<Box>
			<Grid container justifyContent='center' alignItems='stretch'>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>
				{isLoading && (
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
						alt='spinner'
					/>
				)}
				{data && (
					<Grid item xs={12} sm={10} padding={1}>
						{data.map(({ id, name, description, imageCover }) => (
							<Card key={ id }>
								<p>{name}</p>
								<p>{description}</p>
								{/* {fetchImage(imageCover)} */}
								{/* <img src={fetchImage(imageCover)} alt='dd' /> */}
								{/* {fetchImage(imageCover)} */}
								{/* <p id={`img ${imageCover}`}></p>
								<img
									src={fetchImage(imageCover)}
									alt='imagesCover'
									height='100px'
									width='100px'
								/> */}
								<p>
									<ImageComponent id={imageCover} />
								</p>
							</Card>
						))}
					</Grid>
				)}
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
					// bgcolor='lightblue'
				></Grid>
			</Grid>
		</Box>
	);
};

export default Programmes;
