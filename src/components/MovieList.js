import React from 'react';
import MovieHeader from './MovieHeader';
import MovieNotFound from './MovieNotFound';

const MovieList = ( {movies, initialLoad, onDetailClick} ) => {
    if (movies.length > 0 || initialLoad ) {
        return (
            <div>
                { 
                    movies.map((movie, i) => {                     
                        return (
                            <MovieHeader 
                                /* would rather do it this way but some of the IMDB keys
                                 are not unique! {movie.imdbID} */
                                key={i}
                                onDetailClick={onDetailClick}
                                movie={movie}
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