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
			movies: "",
			singlemovie: ""
		}
	}

	onSearchChange = () => {

	}

	render() {
    	return (
			<div>
				<Title />
				<Search />
				<MovieList />
			</div>
    	);
  	}
}

export default App;
