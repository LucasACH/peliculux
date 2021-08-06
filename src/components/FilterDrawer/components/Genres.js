import { Chip } from "@material-ui/core";
import { useContext } from "react";
import { FilterDrawerContext } from "../../../context/FilterDrawerContext";

function Genres() {
  const { genres, setGenres } = useContext(FilterDrawerContext);

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

  function handleGenreChange(key) {
    if (genres.includes(key)) {
      setGenres((prevGenres) => prevGenres.filter((id) => id !== key));
    } else {
      setGenres((prevGenres) => prevGenres.concat(key));
    }
  }

  return (
    <div className="genres">
      {genresList.map((genre) => (
        <Chip
          key={genre.key}
          label={genre.label}
          clickable
          color={genres.includes(genre.key) ? "primary" : "secondary"}
          onClick={() => handleGenreChange(genre.key)}
        />
      ))}
    </div>
  );
}

export default Genres;
