import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";
import Search from "./search";
import { fetchMovies } from "../features/moviesSlice";
const MovieList = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchMovies(searchTerm));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-list-container ">
      {/* <div className="container-fluid "> */}
      <h1>Popular Movies</h1>
      <Search setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2 className="movie-title">
                {movie.Title} - {movie.Type}
              </h2>
              <p className="movie-year">Released in {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
