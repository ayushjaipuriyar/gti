import { TableCell } from '@mui/material';
import React, { useEffect } from 'react';
import '../pages/gallery.css';

const ImageComponent = (props) => {
	useEffect(() => {
		const fetchImage = async (url) => {
			try {
				const response = await fetch(
					`http://localhost:5000/img/gallery/${url}`,
					{
						method: 'GET', // *GET, POST, PUT, DELETE, etc.
						mode: 'cors', // no-cors, *cors, same-origin
						cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
						headers: {
							'Content-Type': 'image/jpeg',
						},
					},
				);
				const blob = await response.blob();
				const image = new Image();
				image.src = URL.createObjectURL(blob);
				image.style.width = '100px';
				image.style.heigh = '100px';
				image.style.marginRight = '0px';
				image.className = 'item';
				document.getElementById(`img-${props.id}`).appendChild(image);
			} catch (error) {
				console.error(`get: error occurred ${error}`);
				return [null, error];
			}
		};
		fetchImage(props.url);
	}, [props.id, props.url]);
	return <TableCell id={`img-${props.id}`}></TableCell>;
};

export default ImageComponent;
