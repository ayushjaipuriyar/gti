import {
	Grid,
	Typography,
	Box,
	CardMedia,
	CardContent,
	Card,
} from '@mui/material';
import React from 'react';

const Noida = () => {
	return (
		<>
			<Grid container justifyContent='center'>
				<Grid
					item
					xs={0}
					sm={3}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>
				<Grid item xs={12} sm={6} padding={2} sx={{ marginRight: '0px' }}>
					<Typography variant='h4' component='h2'>
						Infrastructure at GTI Noida
					</Typography>
					<Box
						sx={{
							p: 2,
							bgcolor: 'background.default',
							display: 'grid',
							gridTemplateColumns: { md: '1fr 1fr' },
							gap: 4,
							gapRow: 10,
						}}
					>
						<Card sx={{ maxWidth: 345, background: '#eeeeee' }}>
							<CardMedia
								component='img'
								image='/img/centers/Jaipur/classroom.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Class Rooms
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									2 Nos of Class Rooms, supported with exclusive workshop
									facilities for hands on training in Mechanical, Electrical &
									Instrumentation fields. Each with a seating capacity of 30
									participants with Audio/Video facilities
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#eeeeee' }}>
							<CardMedia
								component='img'
								image='/img/centers/Jaipur/computerlab.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Computer Lab
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									GTI, Jaipur has a well equipped computer lab with desktop PCs
									to cater the IT and SAP training needs of the participants.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#eeeeee' }}>
							<CardMedia
								component='img'
								image='/img/centers/Jaipur/laboratory.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Laboratory
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									GTI, Jaipur has a well equipped laboratory with a variety of
									Instruments which facilitate the learning process by "Hands on
									Training"
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#eeeeee' }}>
							<CardMedia component='img' image='/img/centers/Jaipur/gym.jpg' />
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Library & Gymnasium
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Library with reference to the latest technical journals, books
									and magazines facility is available within the campus for use
									by participants. Gymnasium with all modern equipment &
									facilities are available on campus for the participants.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#eeeeee' }}>
							<CardMedia
								component='img'
								image='/img/centers/Jaipur/conferenceroom.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Conference Rooms
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Conference Room with a seating capacity for 30 persons equiped
									with latest Audio/Video facilities.
								</Typography>
							</CardContent>
						</Card>

						<Card sx={{ maxWidth: 345, background: '#eeeeee' }}>
							<CardMedia
								component='img'
								image='/img/centers/Jaipur/accommodation.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Accommodation
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Well furnished 22 Rooms hostel facility for the participants
									within the GTI campus. All rooms with modern amenities &
									facilities for excellent comfort stay for the participants.
									High quaility catering services provide hygienic food during
									the stay.
								</Typography>
							</CardContent>
						</Card>
					</Box>
				</Grid>
				<Grid
					item
					xs={0}
					sm={3}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>
			</Grid>
		</>
	);
};

export default Noida;
