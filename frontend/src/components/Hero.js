import {
	Typography,
	Grid,
	Paper,
	CardContent,
	Card,
	Box,
	Avatar,
	CardMedia,
} from '@mui/material';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import PsychologyIcon from '@mui/icons-material/Psychology';
import React from 'react';
import CentersCard from './Centers';
// import Gallery from '../pages/Gallery';

const Desc = () => {
	const centers = ['Noida', 'Jaipur'];
	return (
		<>
			<Grid container justifyContent='center' alignItems='stretch'>
				<Grid
					item
					xs={0}
					sm={1}
					sx={{ display: { xs: 'none', sm: 'block' } }}
					// bgcolor='lightblue'
				></Grid>
				<Grid item xs={12} sm={10} padding={1}>
					{/* <Paper elevation={3} sx={{ padding: '2%' }}> */}
					<Typography variant='h4' component='h2'>
						Gail Training Institute
					</Typography>
					<Grid container spacing={2} padding={2} justifyContent='center'>
						<Grid item xs={0} sm={1}></Grid>

						<Grid item xs={12} sm={4} textAlign='justify'>
							<p>
								In the competitive business scenario, enhancement of learning
								capabilities of employees is a must for all organizations. In
								this direction, GAIL established its training centre "GAIL
								Training Institute" (GTI) at Noida in the year 1997 with
								assistance from DANIDA and at Jaipur in 2005.
							</p>
							<p>
								Since then, GTI has developed itself as a leading Training
								Institute offering various training programmes related to the
								gas value chain for professional development of executives
								working in the Oil &#38;Gas sector. To achieve GAIL's vision,
								GTI is continuously gearing up to design programs to sharpen
								knowledge, improve skills, align attitude and promote efficient
								use of applicable technology. GTI has been meeting these aspects
								with ever increasing process improvement of its management
								system and is an ISO certified Institute.
							</p>
							<p>
								One of the most prestigious awards, the Golden Peacock Quality
								award for Training System, was conferred on GTI in 2005. GAIL
								Training Institute received the National Award for Innovative
								Training Practices from Indian Society of Training &#38;
								Development for the year 2009 -10.
							</p>
						</Grid>
						<Grid item xs={0} sm={1}></Grid>
						<Grid item xs={12} sm={6}>
							<Paper elevation={6}>
								<div className='descimg'>
									<CardMedia
										component='img'
										image='https://gailebank.gail.co.in/gti/images/gti-noida-big.jpg'
										className='descg'
									/>
								</div>
							</Paper>
						</Grid>
					</Grid>
					<br></br>
					<hr></hr>
					<br></br>
					<Typography variant='h4' component='h2' align='center'>
						Gail Training Institutes across India
					</Typography>
					<br></br>
					<br></br>
					<Grid container spacing={2} padding={2} justifyContent='center'>
						{centers.map((centers, index) => (
							<Grid item>
								<CentersCard center={centers} />
							</Grid>
						))}
					</Grid>
					<br></br>
					<hr></hr>
					<br></br>
					<Typography variant='h4' component='h2' align='center'>
						Focus Areas
					</Typography>
					<br></br>
					<br></br>
					<Grid container spacing={2} padding={2} justifyContent='center'>
						<Box
							sx={{
								p: 2,
								bgcolor: 'background.default',
								display: 'grid',
								gridTemplateColumns: { md: '1fr 1fr' },
								gap: 2,
							}}
						>
							<Paper className='fap'>
								<Avatar>
									<CenterFocusStrongIcon />
								</Avatar>
								<br></br>
								Strategic Business and Leadership Leeds of Gas Value Chain
							</Paper>
							<Paper className='fap'>
								<Avatar>
									<AccountTreeIcon />
								</Avatar>
								<br></br>
								Management, Process and Functional Skill Gaps
							</Paper>
							<Paper className='fap'>
								<Avatar>
									<DeveloperBoardIcon />
								</Avatar>
								<br></br>
								Operational, Technical. IT and Safety Needs of Employees
							</Paper>
							<Paper className='fap'>
								<Avatar>
									<PsychologyIcon />
								</Avatar>
								<br></br>
								Behavior Alignment Related Areas
							</Paper>
						</Box>
					</Grid>
					<br></br>
					<hr></hr>
					<br></br>
					<Typography variant='h4' component='h2'>
						Faculty
					</Typography>
					<Grid container spacing={2} padding={2} justifyContent='center'>
						<Grid item xs={0} sm={1}></Grid>

						<Grid item xs={12} sm={4} textAlign='justify'>
							<p>
								GTI has a dedicated faculty base with long experience and
								expertise in the areas of Natural Gas & LPG Pipelines
								Construction and O&M, Compressor Stations, City Gas & CNG, SAP-
								ERP, Cathodic Protection, Integrity Management, Quality
								Management, Health Safety & Environment etc. In addition to its
								core faculty, GTI draws experts from various GAIL departments &
								functions for conducting the focused programs. GTI has also tied
								up with a variety of renowned training institutes which provide
								expert faculty for conducting the courses.
							</p>
							<p>
								The faculty members create an environment wherein participants
								are encouraged to challenge the status quo and develop critical
								thinking skills. Learning at GTI is enhanced by hands-on
								training on computers, simulators and relevant visits to various
								site / plants for gaining first hand practical experience.
							</p>
						</Grid>
						<Grid item xs={0} sm={1}></Grid>
						<Grid item xs={12} sm={6}>
							<Paper elevation={6}>
								<div className='descimg'>
									<CardMedia
										component='img'
										image='https://gailebank.gail.co.in/gti/images/22-02-10-2.jpg'
										className='descg'
									/>
								</div>
							</Paper>
						</Grid>
					</Grid>
					<br></br>
					<hr></hr>
					<br></br>
					<Typography variant='h4' component='h2'>
						Activities
					</Typography>
					<br></br>
					<br></br>
					<Grid container spacing={2} padding={2} justifyContent='center'>
						<Grid item xs={12} sm={6}>
							<Paper elevation={6}>
								<div className='descimg'>
									<CardMedia
										component='img'
										image='https://gailebank.gail.co.in/gti/images/gti-noida-big.jpg'
										className='descg'
									/>
								</div>
							</Paper>
						</Grid>
						<Grid item xs={0} sm={1}></Grid>

						<Grid item xs={12} sm={4} textAlign='right'>
							<Card
								sx={{
									minWidth: 275,
									textAlign: 'justify',
									paddingRight: '5%',
								}}
							>
								<CardContent>
									<ul>
										<Typography sx={{ mb: 1.5 }} color='text.secondary'>
											<li>Providing training to all the employees of GAIL</li>
											<li>
												Customized training programmes for external
												organizations including Joint Venture companies and
												valued customers of GAIL
											</li>
											<li>Development of Internal faculty.</li>
											<li>
												GTI faculty was invited by reputed institutes for
												lectures and as expert panelists as for e.g. in
												University of Petroleum and Energy Studies (UPES)
											</li>
											<li>
												Design,Development and Delivery of course for internal
												participants as well as external organizations
											</li>
											<li>
												Course on Natural Gas Business for 3rd semester MBA
												students at Rajiv Gandhi Institute of Petroleum
												Technology
											</li>
											<li>
												Papers presentation at national & international forums
											</li>
										</Typography>
									</ul>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={0} sm={1}></Grid>
					</Grid>
					{/* </Paper>ca */}
				</Grid>
				<Grid
					item
					xs={0}
					sm={1}
					// bgcolor='lightblue'
					sx={{ display: { xs: 'none', sm: 'block' } }}
				></Grid>
			</Grid>
		</>
	);
};
export default Desc;
