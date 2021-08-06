import { Slider } from "@material-ui/core";
import { useContext } from "react";
import { FilterDrawerContext } from "../../../context/FilterDrawerContext";

function Runtime() {
  const { runtime, setRuntime } = useContext(FilterDrawerContext);

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

  const handleRuntimeChange = (_, newValue) => {
    setRuntime(newValue);
  };

  return (
    <Slider
      value={runtime}
      onChange={handleRuntimeChange}
      defaultValue={[1, 10]}
      aria-labelledby="range-slider"
      valueLabelDisplay="auto"
      marks={marks}
      min={1}
      max={360}
    />
  );
}

export default Runtime;
