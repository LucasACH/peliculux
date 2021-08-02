import { useContext } from "react";

import Slider from "@material-ui/core/Slider";
import { PopularMoviesContext } from "../../../context/popularMovies";

function Runtime() {
  const popularMovies = useContext(PopularMoviesContext);

  const handleRuntimeChange = (_, newValue) => {
    popularMovies.setLoading(true);
    popularMovies.setMovies([]);
    popularMovies.setPage(1);
    popularMovies.setRuntime(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 120,
      label: "120",
    },
    {
      value: 240,
      label: "240",
    },
    {
      value: 360,
      label: "360",
    },
  ];

  return (
    <div className="runtime">
      <Slider
        value={popularMovies.runtime}
        onChange={handleRuntimeChange}
        defaultValue={[1, 10]}
        aria-labelledby="range-slider"
        valueLabelDisplay="auto"
        marks={marks}
        min={1}
        max={360}
      />
    </div>
  );
}

export default Runtime;
