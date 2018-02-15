import React, {Component} from 'react';
import './MovieHeader.css';
import noimage from './noimage.gif';

class MovieHeader extends Component {

    componentWillUpdate() {
        if (this.props.movie.Poster === "N/A") {
            this.props.movie.Poster = noimage;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                            <img className="imgSmall" src={this.props.movie.Poster} alt="Movie Poster" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-block px-3">
                                <div className="d-flex flex-row justify-content-between">
                                    <h4 className="card-title">{this.props.movie.Title}</h4>
                                    <h4 className="justify-content-right">{this.props.movie.Year}</h4>
                                </div>
                                <p className="card-text">{this.props.movie.Plot}</p>
                                <div className="d-flex flex-row align-items-baseline justify-content-between">
                                    <p className="card-text">{this.props.movie.Type}</p>
                                    <button 
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-toggle="modal"
                                        data-target={`#detailsModal${this.props.movie.imdbID}`}>
                                        Movie Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal code below here */}

                <div id={`detailsModal${this.props.movie.imdbID}`} className="modal fade" tabIndex="-1" role="dialog">
				    <div className="modal-dialog modal-lg" role="document">
					    <div className="modal-content">
						    <div className="modal-header">
							    <h2 className="modal-title">{this.props.movie.Title} - ({this.props.movie.Year})</h2>
						    </div>
						    <div className="modal-body">
                                <div className="row">
                                    <div className="col-5">
        							    <img className="imgLarge" src={this.props.movie.Poster} alt="Movie Poster" />
                                    </div>
                                    <div className="col-1">
                                        <p>Plot</p>
                                        <p>Actors</p>
                                    </div>
                                    <div className="col-6">
                                        <p>{this.props.movie.Plot}</p>
                                        <p>{this.props.movie.Actors}</p>
                                    </div>
                                </div>
						    </div>
						    <div className="modal-footer">
							    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						    </div>
					    </div>
				    </div>
			    </div>
            </div>
        )
    }
}

export default MovieHeader;