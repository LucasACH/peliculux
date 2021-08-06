import { useContext, useState } from "react";
import FilterDrawer from "../components/FilterDrawer/FilterDrawer";
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { FilterDrawerContext } from "../context/FilterDrawerContext";
import useDiscover from "../hooks/useDiscover";

function HomePage() {
  const [page, setPage] = useState(1);

  const { initLoading, loading, error, hasMore, movies } = useDiscover(page);
  const { sortBy } = useContext(FilterDrawerContext);

  const carouselItemCount = 5;

  return (
    <>
      <MovieCarousel
        initLoading={initLoading}
        carouselItemCount={carouselItemCount}
        movies={movies.slice(0, carouselItemCount)}
      />
      <FilterDrawer />
      <MovieGrid
        setPage={setPage}
        initLoading={initLoading}
        loading={loading}
        error={error}
        hasMore={hasMore}
        movies={movies}
      />
    </>
  );
}

export default HomePage;
