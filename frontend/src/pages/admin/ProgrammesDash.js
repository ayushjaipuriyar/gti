import {
	Paper,
	Grid,
	TableBody,
	TableRow,
	TableCell,
	Toolbar,
	InputAdornment,
	Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import useTable from '../../components/useTable';
import Input from '../../components/Input';
import Search from '@mui/icons-material/Search';
import { useNavigate, Link } from 'react-router-dom';
import ProgrammesImageComponent from '../../components/ProgrammesImageComponent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UpdateIcon from '@mui/icons-material/Update';
const ProgrammesDash = () => {
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
	const [data, setData] = useState([]);
	const [error, setError] = useState([]);
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
				// console.log(data);
			} catch (error) {
				// console.log(error.message);
				// setError(error.message);
			}
			setIsLoading(false);
		};
		sendRequest();
	}, [error]);
	const [filterFn, setFilterFn] = useState({
		fn: (datas) => {
			return datas;
		},
	});
	const headCells = [
		{ id: '', label: '' },
		{ id: 'name', label: 'Name' },
		{ id: 'description', label: 'Description' },
		{ id: 'imageCover', label: 'Image Cover' },
		{ id: 'images', label: 'Images' },
		{ id: 'actions', label: 'Actions' },
	];
	const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
		useTable(data, headCells, filterFn);

	const handleSearch = (e) => {
		let target = e.target;
		setFilterFn({
			fn: (datas) => {
				if (target.value === '') return datas;
				else
					return datas.filter((x) =>
						x.name.toLowerCase().includes(target.value),
					);
			},
		});
	};

	const deleteHandler = async (id) => {
		const res = prompt('Do you really want to delete this news ?');
		if (res === null || res === '') {
		} else if (res === 'yes') {
			try {
				const response = await fetch(
					`http://localhost:5000/api/v1/news/${id}`,
					{
						method: 'DELETE',
						credentials: 'include',
						headers: {
							'Content-Type': 'application/json; charset=utf-8',
							Authorization: ('Bearer ', sessionStorage.getItem('jwt')),

							// 'X-]Content-Type-Options': 'nosniff',
						},
					},
				);
				if (response.ok) {
					data.splice(
						data.findIndex((x) => x.id === id),
						1,
					);
					navigate('/auth/programmes');
				}
				const responseData = await response;
				console.log(responseData);
				// loadedNews.

				if (!response.ok) {
					const responseData = await response.json();
					throw new Error(responseData.message);
				}
			} catch (error) {
				console.log(error);
				alert(error);
			}
		}
	};
	const updateHandler = (id) => {
		navigate('/auth/updatenews', { state: { newsid: id } });
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
				{isLoading && (
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
						alt='spinner'
					/>
				)}
				{data && (
					<Grid item xs={12} sm={10} padding={1}>
						<Paper>
							<Toolbar>
								<Input
									label='Search News'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<Search />
											</InputAdornment>
										),
									}}
									onChange={handleSearch}
								/>
								<Button
									variant='outlined'
									startIcon={<AddCircleOutlineIcon />}
									sx={{ marginLeft: '70%' }}
								>
									<Link
										style={{ color: 'inherit', textDecoration: 'none' }}
										to='/auth/createnews'
									>
										Create Programme
									</Link>
								</Button>
							</Toolbar>
							<TblContainer>
								<TblHead />
								<TableBody>
									{recordsAfterPagingAndSorting().map((data) => (
										<TableRow id={data.id} key={data.id}>
											<TableCell></TableCell>
											{data.name !== '' ? (
												<TableCell>{data.name}</TableCell>
											) : (
												<TableCell></TableCell>
											)}
											{data.description !== '' ? (
												<TableCell>{data.description}</TableCell>
											) : (
												<TableCell>Description not added</TableCell>
											)}
											{data.imageCover !== '' ? (
												<ProgrammesImageComponent
													id={data.id}
													url={data.imageCover}
												/>
											) : (
												<TableCell></TableCell>
											)}
											{data.images.length !== 0 ? (
												<>
													<TableBody>
														{data.images.map((url, index) => (
															<ProgrammesImageComponent id={index} url={url} />
														))}
													</TableBody>
												</>
											) : (
												<TableCell>
													<p>Images Not Uploaded</p>
												</TableCell>
											)}
											<TableCell>
												<Button
													variant='outlined'
													startIcon={<UpdateIcon />}
													onClick={() => {
														updateHandler(data.id);
													}}
													sx={{ marginRight: '10px' }}
												>
													Update
												</Button>
												<Button
													variant='outlined'
													startIcon={<DeleteIcon />}
													onClick={() => {
														deleteHandler(data.id);
													}}
													color='error'
													// sx={{ color: 'red', border: 'red' }}
												>
													Delete
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</TblContainer>
							<TblPagination />
						</Paper>
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

export default ProgrammesDash;
