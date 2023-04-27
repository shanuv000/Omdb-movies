import React from "react";
import { useSelector } from "react-redux";
import "./MovieList.css";

const MovieList = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-list-container">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2 className="movie-title">{movie.Title}</h2>
              <p className="movie-year">Released in {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
