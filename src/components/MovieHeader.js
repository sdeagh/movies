import React from 'react';
import './MovieHeader.css';
import noimage from './noimage.gif';

const MovieHeader = ( {id, title, year, type, poster, plot} ) => {
    console.log(poster)
    if (poster == "N/A") {
        poster = noimage;
    }
    return (
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <img src={poster} alt="Movie Poster" />
                    </div>
                    <div className="col-md-10">
                        <div className="card-block px-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h4 className="card-title">{title}</h4>
                                <h4 className="justify-content-right">{year}</h4>
                            </div>
                            <p className="card-text">{plot}</p>
                            <div className="d-flex flex-row align-items-baseline justify-content-between">
                                <p className="card-text">{type}</p>
                                <button className="btn btn-primary">Movie Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieHeader;