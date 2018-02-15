import React, {Component} from 'react';
import './Search.css';



class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searching:false,
		}
	}

    componentDidUpdate(){
        const spin = document.getElementById("spinner")
        if (this.props.working) {
            spin.classList.remove("hidden")
        } else {
            spin.classList.add("hidden")
        }
    }
    
    render() {
        return(
            <div className="searchDiv">
                <div className="form-group d-flex flex-row justify-content-left">
                    <label id="searchLabel" htmlFor="searchBox" className="bmd-label-static">Search movies</label>
                    <input 
                        type="search" 
                        className="form-control" 
                        id="searchField" 
                        onKeyUp={this.props.searchChange}
                        
                    />
                    <button 
                        className="btn btn-primary btn-sm searchBtn" 
                        onClick={this.props.searchChange}>
                        Search
                    </button>
                </div>


                <div className="spinner hidden" id="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>

            </div>
        )
    }
}

export default Search;