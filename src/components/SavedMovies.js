import MoviesGrid from "./MoviesGrid/MoviesGrid";

import "../styles/SavedMovies.css";

function SavedMovies() {
  return (
    <div className="saved-movies">
      <MoviesGrid saved />
    </div>
  );
}

export default SavedMovies;
