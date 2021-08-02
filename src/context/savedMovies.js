import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SavedMoviesContext = createContext();

export const SavedMoviesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [movieIds, setMovieIds] = useState(
    JSON.parse(localStorage.getItem("saved-movies")) || []
  );

  useEffect(() => {
    localStorage.setItem("saved-movies", JSON.stringify(movieIds));

    setMovies([]);
    movieIds.map((movieId) => {
      return axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieId}`,
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: "en-US",
        },
      })
        .then((response) => {
          setLoading(false);
          setMovies((prevMovies) => prevMovies.concat(response.data));
        })
        .catch((error) => setError(error));
    });
  }, [movieIds]);

  function addMovieId(movieId) {
    setMovieIds((prevMovies) => prevMovies.concat(movieId));
  }

  function removeMovieId(movieId) {
    setMovieIds((prevMovies) => prevMovies.filter((id) => id !== movieId));
  }

  return (
    <SavedMoviesContext.Provider
      value={{ loading, error, movies, movieIds, addMovieId, removeMovieId }}
    >
      {children}
    </SavedMoviesContext.Provider>
  );
};
