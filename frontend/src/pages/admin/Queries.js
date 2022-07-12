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
import { useNavigate } from 'react-router-dom';

const QueriesLoader = () => {
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
				const response = await fetch('http://localhost:5000/api/v1/query');
				const responseData = await response.json();
				if (!response.ok) {
					throw new Error(responseData);
				}
				const loadedNews = [];
				for (const id in responseData.data.data) {
					loadedNews.push({
						id: responseData.data.data[id].id,
						name: responseData.data.data[id].name,
						organization: responseData.data.data[id].organization,
						designation: responseData.data.data[id].designation,
						phoneno: responseData.data.data[id].phoneno,
						email: responseData.data.data[id].email,
						query: responseData.data.data[id].query,
						createdAt: new Date(responseData.data.data[id].createdAt),
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
		{ id: 'email', label: 'Email Address' },
		{ id: 'phoneno', label: 'Mobile Number' },
		{ id: 'organization', label: 'Organization' },
		{ id: 'designation', label: 'Designation' },
		{ id: 'createdAt', label: 'Created At' },
		{ id: 'query', label: 'Query' },
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
					`http://localhost:5000/api/v1/query/${id}`,
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
				console.log(response);
				if (response.ok) {
					data.splice(
						data.findIndex((x) => x.id === id),
						1,
					);
					navigate('/auth/queries');
				}
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
							{/* <EmployeeForm /> */}
							<Toolbar>
								<Input
									label='Search Names'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<Search />
											</InputAdornment>
										),
									}}
									onChange={handleSearch}
								/>
							</Toolbar>
							<TblContainer>
								<TblHead />
								<TableBody>
									{recordsAfterPagingAndSorting().map((data) => (
										<TableRow key={data.id}>
											<TableCell></TableCell>
											<TableCell>{data.name}</TableCell>
											<TableCell>{data.email}</TableCell>
											<TableCell>{data.phoneno}</TableCell>
											<TableCell>{data.organization}</TableCell>
											<TableCell>{data.designation}</TableCell>
											<TableCell>{data.createdAt.toDateString()}</TableCell>
											<TableCell>{data.query}</TableCell>

											<TableCell>
												<Button
													variant='outlined'
													startIcon={<DeleteIcon />}
													onClick={() => {
														deleteHandler(data.id);
													}}
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

export default QueriesLoader;
