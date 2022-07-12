import React, { useEffect, useState } from 'react';

const ImageComponent = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		const fetchImage = async (url) => {
			try {
				const response = await fetch(`http://localhost:5000/img/news/${url}`, {
					method: 'GET', // *GET, POST, PUT, DELETE, etc.
					mode: 'cors', // no-cors, *cors, same-origin
					cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
					headers: {
						'Content-Type': 'image/jpeg',
					},
				});
				const blob = await response.blob();
				// console.log(blob);
				// console.log(URL.createObjectURL(blob));
				const image = new Image();
				image.src = URL.createObjectURL(blob);
				image.style.width = '100px';
				image.style.heigh = '100px';
				// console.log(image);
				// return image;
				document.getElementById(`img ${props.id}`).appendChild(image);
				// const src = URL.createObjectURL(blob);
				// return <>image</>;
			} catch (error) {
				console.error(`get: error occurred ${error}`);
				return [null, error];
			}
			setIsLoading(false);
		};
		fetchImage(props.url);
	}, [props.id, props.url]);
	return (
		<>
			{isLoading && (
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
					alt='spinner'
				/>
			)}
			<p id={`img ${props.id}`}></p>
			{/* {fetchImage($props.id)} */}
		</>
	);
};

export default ImageComponent;
