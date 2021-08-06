import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

import { FilterDrawerContext } from "../../context/FilterDrawerContext";
import useSaved from "../../hooks/useSaved";

import GridItem from "./components/GridItem";
import fillSpace from "./helpers/fillSpace";

import "./styles/MovieGrid.css";

function MovieGrid({
  isHomePage,
  movies,
  setPage,
  initLoading,
  loading,
  error,
  hasMore,
}) {
  const [columnCount, setColumnCount] = useState(null);
  const { savedMovies, handleSave } = useSaved();

  const { open } = useContext(FilterDrawerContext);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1600) setColumnCount(6);
      if (window.innerWidth < 1600) setColumnCount(5);
      if (window.innerWidth <= 1200) setColumnCount(4);
      if (window.innerWidth <= 900) setColumnCount(3);
      if (window.innerWidth <= 700) setColumnCount(2);
      if (window.innerWidth <= 500) setColumnCount(1);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  if (error) {
    return <div>ERROR</div>;
  }

  if (initLoading) {
    return (
      <div className={`movies-grid ${isHomePage ? "" : "avoid-header"}`}>
        {[...Array(20).keys()].map((n) => (
          <GridItem key={n} loading={true} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`movies-grid ${isHomePage ? "" : "avoid-header"} ${
        open ? "filter-drawer-open" : ""
      }`}
    >
      <div className="spacer"></div>
      {movies.map((movie, i) => (
        <GridItem
          isLastChild={movies.length === i + 1}
          key={movie.id}
          setPage={setPage}
          loading={loading}
          hasMore={hasMore}
          movieId={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
          saved={savedMovies.includes(movie.id)}
          handleSave={() => handleSave(movie.id)}
        />
      ))}

      {/* Fill grid remaining space with loading GridItem */}
      {hasMore &&
        [...Array(fillSpace(movies.length, columnCount)).keys()].map((n) => (
          <GridItem key={n} loading={true} />
        ))}
    </div>
  );
}

MovieGrid.propTypes = {
  isHomePage: PropTypes.bool,
  movies: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  initLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

MovieGrid.defaultProps = {
  isHomePage: true,
};

export default MovieGrid;
