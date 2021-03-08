import React from "react";
import { useParams } from "react-router-dom";
import placeholder from "../../placeholder.jpg";

import "../../styles/MovieDetails.css";

function MovieDetails() {
  let { movie_id } = useParams();
  return (
    <div className="movie-details">
      <div className="movie-details-backdrop">
        <img src={placeholder} alt="" />
      </div>
      <div className="content-wrapper">
        <div className="left">
          <div className="upper"></div>
          <div className="lower"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default MovieDetails;
