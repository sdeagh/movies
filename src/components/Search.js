import React from 'react';
import './Search.css';



const Title = ( {searchChange } ) => {

    

    return (
        <div className="searchDiv">
            <div className="form-group d-flex flex-row justify-content-left">
                <label id="searchLabel" htmlFor="searchBox" className="bmd-label-static">Search movies</label>
                <input 
                    type="search" 
                    className="form-control" 
                    id="searchField" 
                    onKeyUp={searchChange}
                    
                />
                <button 
                    className="btn btn-primary btn-sm searchBtn" 
                    onClick={searchChange}>
                    Search
                </button>
            </div>
        </div>

    )
}

export default Title;