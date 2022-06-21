import { Card, Paper, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const Programmes = () => {
	const programmes = [
		'Sanskritik Sandhya organized by Executive Trainees On (31th August, 2009)',
		'4 Day Course on Development of City Gas & CNG From (21-24 July 2009)',
		'One Day Workshop on Opportunities & Challenges in Development of City Gas & CNG in India On (20th July 2009)',
	];
	return (
		<Box>
			<Grid container justifyContent='center' alignItems='stretch'>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
					// bgcolor='lightblue'
				></Grid>
				<Grid item xs={12} sm={10} padding={1}>
					{programmes.map((programmes, index) => (
						<div>
							<Card>{programmes}</Card>
						</div>
					))}
				</Grid>
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
