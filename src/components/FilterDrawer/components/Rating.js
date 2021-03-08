import React from "react";

import Slider from "@material-ui/core/Slider";

function Rating() {
  return (
    <div className="rating">
      <Slider
        defaultValue={10}
        aria-labelledby="discrete-slider"
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
