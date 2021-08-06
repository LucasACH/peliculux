import { Slider } from "@material-ui/core";
import { useContext } from "react";
import { FilterDrawerContext } from "../../../context/FilterDrawerContext";

function Rating() {
  const { rating, setRating } = useContext(FilterDrawerContext);

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  function handleRatingChange(_, newValue) {
    setRating(newValue);
  }

  return (
    <Slider
      value={rating}
      onChange={handleRatingChange}
      defaultValue={[1, 10]}
      aria-labelledby="range-slider"
      valueLabelDisplay="auto"
      step={1}
      marks={marks}
      min={1}
      max={10}
    />
  );
}

export default Rating;
