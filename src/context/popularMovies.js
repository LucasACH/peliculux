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
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState([1, 10]);
  const [runtime, setRuntime] = useState([1, 360]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: API_KEY,
        page: page,
        sort_by: sortBy,
        with_genres: genres.join(", "),
        "vote_average.gte": rating[0],
        "vote_average.lte": rating[1],
        "with_runtime.gte": runtime[0],
        "with_runtime.lte": runtime[1],
      },
    })
      .then((response) => {
        setLoading(false);
        setMovies((prevMovies) => prevMovies.concat(response.data.results));
        setFirstTimeLoading(false);
      })
      .catch((error) => setError(error));
  }, [page, sortBy, genres, rating, runtime]);

  return (
    <PopularMoviesContext.Provider
      value={{
        loading,
        setLoading,
        error,
        firstTimeLoading,
        setPage,
        movies,
        setMovies,
        sortBy,
        setSortBy,
        genres,
        setGenres,
        rating,
        setRating,
        runtime,
        setRuntime,
      }}
    >
      {children}
    </PopularMoviesContext.Provider>
  );
};
