import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Chip } from "@material-ui/core";

function Genres() {
  const moviesContext = useContext(MoviesContext);

  const genresList = [
    { key: 28, label: "Action" },
    { key: 12, label: "Adventure" },
    { key: 16, label: "Animation" },
    { key: 35, label: "Comedy" },
    { key: 80, label: "Crime" },
    { key: 99, label: "Documentary" },
    { key: 18, label: "Drama" },
    { key: 10751, label: "Family" },
    { key: 14, label: "Fantasy" },
    { key: 36, label: "History" },
    { key: 27, label: "Horror" },
    { key: 10402, label: "Music" },
    { key: 9648, label: "Mystery" },
    { key: 10749, label: "Romance" },
    { key: 878, label: "Science Fiction" },
    { key: 10770, label: "TV Movie" },
    { key: 53, label: "Thriller" },
    { key: 10752, label: "War" },
    { key: 37, label: "Western" },
  ];

  function handleGenreChange(genreId) {
    if (moviesContext.genres.includes(genreId)) {
      moviesContext.setGenres((prevGenres) =>
        prevGenres.filter((id) => id !== genreId)
      );
      moviesContext.setPage(1);
    } else {
      moviesContext.setGenres((prevGenres) => prevGenres.concat(genreId));
      moviesContext.setPage(1);
    }
  }

  return (
    <div className="genres">
      {genresList.map((genre) => (
        <Chip
          key={genre.key}
          label={genre.label}
          color={
            moviesContext.genres.includes(genre.key) ? "primary" : "secondary"
          }
          onClick={() => handleGenreChange(genre.key)}
        />
      ))}
    </div>
  );
}

export default Genres;
