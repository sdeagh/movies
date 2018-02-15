import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import MovieList from './components/MovieList';

class App extends Component {
	constructor() {
		super()
		this.state = {
			movies: [],
			singlemovie: "",
			working: false
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

		const handleDetailsList = (details) => {			
			this.setState({movies: details})

			this.setState({working: false})
		}

		const handleErrors = (error) => {
			console.error('Something went wrong ', error)

			this.setState({working: false})
		}	

		if (searchField !== "") {
			this.setState({working: true})
			
			fetch('https://www.omdbapi.com/?apikey=451fadce&s=' + searchField)
				.then(response => response.json(response))
				.then(detailsRequest)
				.then(handleDetailsList)
				.catch(handleErrors)

			function detailsRequest(movies) {
				return Promise.all(movies.Search.map(function(movie) {
					return fetch('https://www.omdbapi.com/?apikey=451fadce&i=' + movie.imdbID)
					.then(response => response.json(response))
				}))
			}
		}
	}

	render() {
		console.log("render", this.state.working);
    	return (
			<div>
				<Title />
				<Search searchChange={ this.onSearchChange } working={this.state.working} />
				<MovieList movies={this.state.movies} />
			</div>
    	);
  	}
}

export default App;
