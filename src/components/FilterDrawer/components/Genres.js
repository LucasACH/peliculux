import React from "react";
import { Chip } from "@material-ui/core";

function Genres() {
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

  return (
    <div className="genres">
      {genresList.map((genre, i) => (
        <Chip key={i} label={genre.label} onClick={() => null} />
      ))}
    </div>
  );
}

export default Genres;
