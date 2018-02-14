import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import MovieList from './components/MovieList';

class App extends Component {
	constructor() {
		super()
		this.state = {
			searchterm: "",
			movies: [],
			singlemovie: ""
		}
	}

	onSearchChange = (event) => {
		let searchField = ""
		if (event.target.matches("button")) {
			searchField = document.getElementById('searchField').value;
		} else {
			if (event.key === 'Enter') {
				searchField = event.target.value;
			}
		}

		if (searchField !== "") {
			fetch('https://www.omdbapi.com/?apikey=451fadce&s=' + searchField)
			.then(response => response.json(response))
			.then(movies => {
				if (movies.Response === 'True') {
					movies.Search.map((movie, i) => {
						return (
							fetch('https://www.omdbapi.com/?apikey=451fadce&i=' + movie.imdbID)
							.then(response => response.json(response))
							.then(movieDetails => {
								movie.Plot = movieDetails.Plot
							})
						)
					})
					return movies
				} 
			})
			.then(newMovies => {
				if (newMovies){
					console.log("Setting array", newMovies.Search)
					this.setState({movies: newMovies.Search})
				} else {
					this.setState({movies: []})
				}
			})
		}
	}

	render() {
		console.log("render");
    	return (
			<div>
				<Title />
				<Search searchChange={ this.onSearchChange } />
				<MovieList movies={this.state.movies} />
			</div>
    	);
  	}
}

export default App;
