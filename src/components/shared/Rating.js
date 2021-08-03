import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Slider from "@material-ui/core/Slider";

function Rating() {
  const moviesContext = useContext(MoviesContext);

  const handleRatingChange = (_, newValue) => {
    moviesContext.setRating(newValue);
    moviesContext.setPage(1);
  };

  return (
    <div className="rating">
      <Slider
        value={moviesContext.rating}
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
