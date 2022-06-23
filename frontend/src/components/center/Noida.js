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
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/room1.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Class Rooms
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									4 Nos of Class Rooms, PRAGYA, MANISHA, MEDHA & VIDYA. Each
									with a seating capacity of 30 participants with Audio/Video
									facilities.<br></br>
									<br></br> PRAGYA with attached 3 Mini Syndicate Rooms for
									Group Discussions
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/computer-lab.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Computer Lab
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Computer Lab “Aryabhatta” with seating capacity of 30
									participants with Desktop PCs & Audio/ Video facilities
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/library.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Library
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Library "Gyanodaya" has facility of online connection with
									other libraries of GAIL at Delhi, Noida, Pata (UP) etc. and
									British Council Library. It also has an Internet Café.
									Elegantly designed library and information centre is equipped
									with the latest management and technical journals, books and
									magazines. Internet facilities are provided to all
									participants after the training programme timings.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/gim.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Sports/Recreational Facilities
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Sports facilities include Table-Tennis, Carrom & Chess. Also
									coming up is the facility for Billiards. Gymnasium “Sehat”
									with all modern equipment & facilities is available on campus
									for the participants with change rooms
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/conferenceroom.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Conference Rooms
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Main Conference Room "Manthan" and Mini Conference Room
									"Vichar Vimarsh" have a seating capacity of 50 and 25 persons
									respectively. Both have facility for Video Conferencing.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/auditorium-room.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Auditorium
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Auditorium "Indra Dhanush" provides seating capacity for 200
									persons with Audio/Video facility and excellent acoustics.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/accommodation.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Accommodation
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Well furnished 58 Rooms Executive hostel within the GTI campus
									provide excellent comfort for the participants. All rooms are
									provided with facilities like AC, heater, geyser, fridge and
									TV. Hostel residents are provided with tea/coffee makers.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ maxWidth: 345, background: '#f5f5f5' }}>
							<CardMedia
								component='img'
								image='https://gailebank.gail.co.in/gti/images/cafeteria.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Cafeteria
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									High quaility catering services provide hygienic food during
									the stay At Dining Hall dask “Dastarkhan” & “Kutch Corner”.
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
