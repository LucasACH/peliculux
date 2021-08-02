import React, { useContext } from "react";

import Slider from "@material-ui/core/Slider";
import { PopularMoviesContext } from "../../../context/popularMovies";

function Rating() {
  const popularMovies = useContext(PopularMoviesContext);

  const handleRatingChange = (_, newValue) => {
    popularMovies.setLoading(true);
    popularMovies.setMovies([]);
    popularMovies.setPage(1);
    popularMovies.setRating(newValue);
  };

  return (
    <div className="rating">
      <Slider
        value={popularMovies.rating}
        onChange={handleRatingChange}
        defaultValue={[1, 10]}
        aria-labelledby="range-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
    </div>
  );
}

export default Rating;
