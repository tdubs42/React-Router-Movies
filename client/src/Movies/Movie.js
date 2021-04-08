/** @format */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Movie(props) {
	const [movie, setMovie] = useState();

	let id = 1;
	// Change ^^^ that line and use a hook to obtain the :id parameter from the URL

	useEffect(() => {
		Axios.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
		// This effect should run every time time
		// the `id` changes... How could we do this?
	}, []);

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = evt => { }

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	const { title, director, metascore, stars } = props;

	return (
		<div className='save-wrapper'>
			<div className='movie-card'>
				<h2>{title}</h2>
				<div className='movie-director'>
					Director: <em>{director}</em>
				</div>
				<div className='movie-metascore'>
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map((star) => (
					<div key={star} className='movie-star'>
						{star}
					</div>
				))}
			</div>
			<div className='save-button'>Save</div>
		</div>
	);
}
