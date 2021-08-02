import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";

import "./styles/MovieSpecs.css";
import Skeleton from "@material-ui/lab/Skeleton";

function MovieSpecs({ releaseYear, runtime, rating }) {
  return (
    <div className="movie-specs">
      <Typography variant="body1" color="textPrimary" style={{ marginTop: 2 }}>
        {releaseYear === "" ? (
          <Skeleton animation="wave" width="50px" />
        ) : (
          releaseYear
        )}
      </Typography>
      <div className="dot"></div>
      <Typography variant="body1" color="textPrimary" style={{ marginTop: 2 }}>
        {runtime === "" ? (
          <Skeleton animation="wave" width="50px" />
        ) : (
          runtime + " min"
        )}
      </Typography>
      <div className="dot"></div>
      <Typography variant="body1" color="textPrimary" style={{ marginTop: 2 }}>
        {rating}
      </Typography>
      <Rating readOnly precision={0.1} value={rating * 0.5} />
    </div>
  );
}

export default MovieSpecs;
