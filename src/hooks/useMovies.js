import { useEffect, useState } from "react";
import axios from "axios";

function useMovies(
  discover,
  movieId,
  page,
  sortBy,
  genres,
  rating,
  runtime,
  from,
  to
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (page === 1) {
      setLoading(true);
      setMovies([]);
    }

    axios({
      method: "GET",
      url: discover
        ? "https://api.themoviedb.org/3/discover/movie"
        : `https://api.themoviedb.org/3/movie/${movieId}`,
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
        setHasMore(response.data.results.length > 0);
        setMovies((prevMovies) => prevMovies.concat(response.data.results));
      })
      .catch((error) => setError(error));
  }, [discover, page, sortBy, genres, rating, runtime, from, to]);

  return { loading, error, hasMore, movies };
}

export default useMovies;
