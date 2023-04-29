import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";
import Search from "./search";
import { fetchMovies } from "../features/moviesSlice";
import { Tv, Film } from "react-bootstrap-icons";

const MovieList = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const heightOfScreen = window.innerHeight;
  const widthOfScreen = window.innerWidth;

  const handleSearch = () => {
    dispatch(fetchMovies(searchTerm));
  };

  if (loading) {
    // return <div className="bg-transparent">Loading...</div>;
    return (
      <div
        className="position-relative"
        style={{ height: heightOfScreen - 20, width: widthOfScreen }}
      >
        <div
          class="spinner-border text-danger position-absolute top-50 start-50"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span class="visually-hidden ">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container  ">
      {/* <div className="container-fluid "> */}
      <h1 className="text-center text-danger">Popular Movies</h1>
      <Search setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card text-wrap">
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="movie-poster"
            />
            <div className="movie-info ">
              <h2 className="movie-title">
                {movie.Title} {movie.Type === "movie" ? <Film /> : <Tv />}
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
