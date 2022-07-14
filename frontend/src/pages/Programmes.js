import { Card, Box, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ImageComponent from '../components/ImageComponent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Programmes = () => {
	const [expanded, setExpanded] = useState(false);
	var handleChange = function (panel) {
		return function (event, isExpanded) {
			console.log(panel, isExpanded);
			setExpanded(isExpanded ? panel : false);
		};
	};

	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5000/api/v1/news');
				const responseData = await response.json();
				console.log(response);
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
				setData(loadedNews.reverse());
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
			}
			setIsLoading(false);
		};
		sendRequest();
	}, [error]);
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
						{data.map(({ id, name, description, imageCover, images }, i) => (
							<Accordion
								expanded={expanded === `panel${id}`}
								onChange={handleChange(`panel${id}`)}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1bh-content'
									id='panel1bh-header'
								>
									<Typography sx={{ width: '3%', flexShrink: 0 }}>
										{i + 1}
									</Typography>
									<Typography sx={{ width: '80%', flexShrink: 0 }}>
										{name}
									</Typography>
									<ImageComponent id={id} url={imageCover} />
									{/* <img src='https://picsum.photos/100/40' alt='ss' /> */}
								</AccordionSummary>
								<AccordionDetails>
									<Typography>{description}</Typography>
									<br></br>
									<br></br>
									<box component='div' sx={{ display: 'inline' }}>
										{images.map((url, index) => (
											<ImageComponent
												id={`${id}${index}`}
												url={url}
												inner='1'
											/>
										))}
									</box>
								</AccordionDetails>
							</Accordion>
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
