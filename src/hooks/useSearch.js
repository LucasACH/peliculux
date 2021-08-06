import axios from "axios";
import { useEffect, useState } from "react";

function useSearch(query, page) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      cancelToken: source.token,
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: "en-US",
        page: page,
        query: query,
      },
    })
      .then((response) => {
        console.log("fetching movies");
        if (response.data.results.length < 20) setHasMore(false);
        setMovies((prevMovies) => prevMovies.concat(response.data.results));
        setLoading(false);
        setInitLoading(false);
      })
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        } else {
          setError(error);
        }
      });

    return () => source.cancel("Operation canceled by the user.");
  }, [query, page]);

  return {
    initLoading,
    setInitLoading,
    loading,
    setLoading,
    hasMore,
    setHasMore,
    error,
    movies,
    setMovies,
  };
}

export default useSearch;
