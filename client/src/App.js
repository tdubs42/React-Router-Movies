/** @format */
// Base React Imports
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// HTTP Client
import Axios from 'axios';

// React Component Imports
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App() {
	const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const getMovies = () => {
			Axios.get('http://localhost:5000/api/movies')
				.then((res) => {
					setMovieList(res.data);
				})
				.catch((err) => {
					console.error('Server Error', err);
				});
		};
		getMovies();
	}, []);

	const addToSavedList = (id) => {
		// This is stretch. Prevent the same movie from being "saved" more than once
	};

	return (
		<div>
			<SavedList
				list={
					[
						/* This is stretch */
					]
				}
			/>
			<Switch>
				<Route exact path='/'>
					<MovieList movies={movieList} />
				</Route>
				<Route exact path='/movies/:id'>
					<Movie />
				</Route>
			</Switch>
		</div>
	);
}
