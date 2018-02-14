import React from 'react';
import MovieHeader from './MovieHeader';
import MovieNotFound from './MovieNotFound';

const MovieList = ( {movies} ) => {
    if (movies) {
        return (
            <div>
                { 
                    movies.map((movie, i) => {                     
                        return (
                            <MovieHeader 
                                /* would rather do it this way but some of the IMDB keys are not unique! {movie.imdbID} */
                                key={i}
                                id={movie.imdbID} 
                                title={movie.Title} 
                                year={movie.Year}
                                type={movie.Type}
                                poster={movie.Poster}
                                plot={movie.Plot}
                            />
                        );
                    })
                }                    
            </div>
        )
    } else {
        return (
            <MovieNotFound />
        )
    }
}

export default MovieList;

/* if (movie.Poster === "") {
    movie.Poster = "../assets/noimage.png"
} */