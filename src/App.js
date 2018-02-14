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

	componentWillReceiveProps() {
		console.log("GWRP");
	}

	onSearchChange = (event) => {
		if (event.target.matches("button")) {
			const searchField = document.getElementById('searchField');
			/* this.setState({searchterm: searchField.value});	 */

			console.log("SearchField Value: " + searchField.value)
			if (searchField.value !== "") {
				fetch('https://www.omdbapi.com/?apikey=451fadce&s=' + searchField.value)
				.then(response => response.json(response))
				.then(movies => {
					this.setState({movies: movies.Search})
					console.log(movies);
				})
			}
		}
/* 
		if (event.target.matches("button")) {
			var searchField = document.getElementById('searchField');
			this.setState({searchterm: searchField.value});	
		} else {
			if (event.key === 'Enter') {
				this.setState({searchterm: event.target.value})	
			}	
		} */

		
	}

	render() {
		console.log("Render: " + this.state.movies);

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
