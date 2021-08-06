import { useEffect, useState } from "react";

function useSaved() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const localSavedMovies = JSON.parse(localStorage.getItem("saved-movies"));

    if (localSavedMovies === null) {
      localStorage.setItem("saved-movies", JSON.stringify([]));
      setSavedMovies([]);
    } else {
      setSavedMovies(localSavedMovies);
    }
  }, []);

  function handleSave(movieId) {
    if (savedMovies.includes(movieId)) {
      localStorage.setItem(
        "saved-movies",
        JSON.stringify(savedMovies.filter((id) => id !== movieId))
      );
      setSavedMovies((prevMovies) => prevMovies.filter((id) => id !== movieId));
    } else {
      localStorage.setItem(
        "saved-movies",
        JSON.stringify(savedMovies.concat(movieId))
      );
      setSavedMovies((prevMovies) => prevMovies.concat(movieId));
    }
  }

  return { savedMovies, handleSave };
}

export default useSaved;
