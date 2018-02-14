import React from 'react';
import MovieHeader from './MovieHeader';

const MovieList = ( {movies} ) => {
    
    return (
            <div>
                { 
                    movies.map((movie, i) => {
                        return (
                            <MovieHeader 
                                key={movie.imdbID} 
                                id={movie.imdbID} 
                                title={movie.Title} 
                                year={movie.Year} 
                            />
                        );
                    })
                 }
            </div>
    )
}

export default MovieList;