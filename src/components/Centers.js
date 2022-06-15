import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Button,
	CardActions,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CentersCard = (props) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='200'
				image={`https://gailebank.gail.co.in/gti/images/gti-${props.center}-big.jpg`}
				alt={`GTI ${props.center}`}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{props.center}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Gail Training Institute in {props.center}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' color='primary'>
					<Link
						style={{ color: 'inherit', textDecoration: 'none' }}
						to={`/center/${props.center}`}
					>
						Learn More
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default CentersCard;
