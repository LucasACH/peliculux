import axios from "axios";
import { createContext, useEffect, useState } from "react";
import formatReleaseDate from "../helpers/formatReleaseDate";

export const PopularMoviesContext = createContext();

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
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(formatReleaseDate(new Date()));

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        page: page,
        sort_by: sortBy,
        with_genres: genres.join(", "),
        "vote_average.gte": rating[0],
        "vote_average.lte": rating[1],
        "with_runtime.gte": runtime[0],
        "with_runtime.lte": runtime[1],
        "release_date.gte": from,
        "release_date.lte": to,
      },
    })
      .then((response) => {
        setLoading(false);
        setMovies((prevMovies) => prevMovies.concat(response.data.results));
        setFirstTimeLoading(false);
      })
      .catch((error) => setError(error));
  }, [page, sortBy, genres, rating, runtime, from, to]);

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
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </PopularMoviesContext.Provider>
  );
};
