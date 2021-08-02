import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PopularMoviesContext = createContext();

const API_KEY = "ac2fbae093f0f234fd1e76ffe76cd7ef";

export const PopularMoviesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const [sortBy, setSortBy] = useState("popularity.desc");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: { api_key: API_KEY, page: page, sort_by: sortBy },
    })
      .then((response) => {
        setLoading(false);
        setMovies((prevMovies) => prevMovies.concat(response.data.results));
        setFirstTimeLoading(false);
      })
      .catch((error) => setError(error));
  }, [page, sortBy]);

  return (
    <PopularMoviesContext.Provider
      value={{
        loading,
        error,
        firstTimeLoading,
        setPage,
        movies,
        setMovies,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </PopularMoviesContext.Provider>
  );
};
