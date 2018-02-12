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

	render() {
    	return (
				
				<div class='outer-scratch'>
  					<div class="inner-scratch">
    					<div class="background grain">

							<h1>Hellloooo</h1>
						</div>
  					</div>
				</div>

    	);
  	}
}

export default App;
