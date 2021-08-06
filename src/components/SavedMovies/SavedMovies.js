import useDetails from "../../hooks/useDetails";
import useSaved from "../../hooks/useSaved";
import MovieGrid from "../MovieGrid/MovieGrid";

function SavedMovies() {
  const { savedMovies } = useSaved();
  const { movieDetails, loadingDetails } = useDetails(savedMovies);

  return (
    <MovieGrid
      initLoading={loadingDetails}
      isHomePage={false}
      movies={movieDetails}
    />
  );
}

export default SavedMovies;
