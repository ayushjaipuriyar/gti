import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const navigate = useNavigate();
useEffect(() => {
	if (!sessionStorage.getItem('jwt')) {
		navigate('/auth/login');
		console.log('NOt auhtenticated');
		console.log(sessionStorage.getItem('jwt'));
	}
}, [navigate]);
	const fun = async () => {
		try {
			const response = await fetch(
				'http://localhost:5000/api/v1/users/logout/',
				{
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						// 'X-]Content-Type-Options': 'nosniff',
						Authorization: ('Bearer ', sessionStorage.getItem('jwt')),
					},
				},
			);
			const responseData = await response.json();
			sessionStorage.setItem('jwt', 'loggedout');
			console.log(responseData);
			setTimeout(() => {
				navigate('/Home');
			}, 200);
			// sleep(200).then(() => {
			// navigate('/Home');
			// });
			if (!response.ok) {
				throw new Error(
					responseData.error.status + ' ' + responseData.error.statusCode,
				);
			}

			// console.log(errors);
		} catch (err) {
			console.log(err);
			// console.log(responseData);
		}
	};
	useEffect(() => {
		fun();
	}, []);

	return (
		<>
			<p>Logged out</p>
		</>
	);
};

export default Logout;
