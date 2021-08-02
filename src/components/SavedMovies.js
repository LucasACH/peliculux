import React, { useContext } from "react";
import "../styles/SavedMovies.css";
import MoviesGrid from "./MoviesGrid/MoviesGrid";

function SavedMovies() {
  return (
    <div className="saved-movies">
      <MoviesGrid saved />
    </div>
  );
}

export default SavedMovies;
