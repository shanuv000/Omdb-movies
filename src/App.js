import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/moviesSlice";
import MovieList from "./components/MovieList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App bg-black text-dark">
      <MovieList />
    </div>
  );
}

export default App;
