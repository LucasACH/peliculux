import React from "react";
import Rating from "@material-ui/lab/Rating";

import "./styles/MovieSpecs.css";

function MovieSpecs({ releaseYear, runtime, rating }) {
  return (
    <div className="movie-specs">
      <p>{releaseYear}</p>
      <div className="dot"></div>
      <p>{runtime}</p>
      <div className="dot"></div>
      <p>{rating}</p>
      <Rating readOnly precision={0.1} value={rating * 0.5} />
    </div>
  );
}

export default MovieSpecs;
