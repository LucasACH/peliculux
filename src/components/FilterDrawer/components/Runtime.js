import React from "react";

import Slider from "@material-ui/core/Slider";

function Runtime() {
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
        defaultValue={360}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={360}
      />
    </div>
  );
}

export default Runtime;
