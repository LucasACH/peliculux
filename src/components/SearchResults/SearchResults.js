import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import MovieGrid from "../MovieGrid/MovieGrid";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const [page, setPage] = useState(1);

  const query = useQuery().get("query");
  const {
    initLoading,
    setInitLoading,
    loading,
    setLoading,
    hasMore,
    setHasMore,
    error,
    movies,
    setMovies,
  } = useSearch(query, page);

  useEffect(() => {
    console.log("init search");
    setPage(1);

    return () => {
      console.log("cleanup");
      setInitLoading(true);
      setLoading(true);
      setHasMore(true);
      setMovies([]);
    };
  }, [query]);

  return (
    <MovieGrid
      initLoading={initLoading}
      loading={loading}
      hasMore={hasMore}
      error={error}
      movies={movies}
      isHomePage={false}
      setPage={setPage}
    />
  );
}

export default SearchResults;
