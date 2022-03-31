import React from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites, getMovieInfo} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="image-container d-flex justify-content-start m-3 " key={idx}>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                    {/* Checks init pic and displays AddToFavourites if false */}
                    {FavouriteComponent !== null ?
                    <div onClick={() => handleFavourites(movie)} className="overlay d-flex align-items=center justify-content-center">
                        <FavouriteComponent/>
                        <h1 onClick={() => getMovieInfo(movie)}>click meh</h1>
                    </div>
                    : null}
                </div>
            ))}
        </>
    );
}

export default MovieList;