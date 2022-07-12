import React, { useEffect } from 'react';
import '../pages/gallery.css';

const ImageComponent = (props) => {
	const size = () => {
		var s = Math.floor(Math.random() * 4 + 1);
		switch (s) {
			case 1:
				return 'item';
			case 2:
				return 'item item--medium';
			case 3:
				return 'item item--large';
			case 4:
				return 'item item--full';

			default:
				return 'item';
		}
	};
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
				// console.log(blob);
				// console.log(URL.createObjectURL(blob));
				const image = new Image();
				// let src = URL.createObjectURL(blob);
				image.src = URL.createObjectURL(blob);

				if (props.dash) {
					// image.style.width = '100px';
					image.style.heigh = '200px';
				}
				image.className = size();
				// return image;
				document.getElementById(`${props.id}`).appendChild(image);
				// const divElement = document.getElementsByClassName('div-item');
				// console.log(divElement[0]);
				// divElement.style.backgroundImage = 'url(' + src + ')';
				// return <>image</>;
			} catch (error) {
				console.error(`get: error occurred ${error}`);
				return [null, error];
			}
		};
		fetchImage(props.url);
	}, [props.id, props.url]);
	return (
		// <>
		// 	<p id={`img ${props.id}`}></p>
		// 	{props.name}
		// 	<div id={`item__details ${props.id}`}></div>
		// 	{/* {fetchImage($props.id)} */}
		// </>
		<div className={`div-item ${size()}`} id={props.id}>
			<div className='item__details'>{props.name}</div>
		</div>
	);
};

export default ImageComponent;
