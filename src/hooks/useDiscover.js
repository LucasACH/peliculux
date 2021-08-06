import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FilterDrawerContext } from "../context/FilterDrawerContext";

function useDiscover(page) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [movies, setMovies] = useState([]);

  const { sortBy } = useContext(FilterDrawerContext);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    if (page === 1 && !initLoading) {
      console.log("deleting movies");
      setMovies([]);
    }

    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      cancelToken: source.token,
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: "en-US",
        page: page,
        sort_by: sortBy,
      },
    })
      .then((response) => {
        console.log(`fetching page: ${page}`);
        if (response.data.results < 20) setHasMore(false);

        setMovies((prevMovies) => prevMovies.concat(response.data.results));
        setLoading(false);
        setInitLoading(false);
      })
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        } else {
          setError(thrown.message);
        }
      });

    return () => source.cancel("Operation canceled by the user.");
  }, [page]);

  return { initLoading, loading, error, hasMore, movies };
}

export default useDiscover;
