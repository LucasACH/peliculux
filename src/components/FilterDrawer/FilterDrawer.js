import { Box, Divider, Typography } from "@material-ui/core";
import { useContext } from "react";
import { FilterDrawerContext } from "../../context/FilterDrawerContext";
import Genres from "./components/Genres";
import Rating from "./components/Rating";
import ReleaseDate from "./components/ReleaseDate";
import Runtime from "./components/Runtime";

import "./styles/FilterDrawer.css";

function FilterDrawer() {
  const { open } = useContext(FilterDrawerContext);

  return (
    <Typography
      color="textPrimary"
      component="div"
      className={`filter-drawer ${open ? "open" : ""}`}
    >
      <div className="filter-item">
        <Box fontSize="h6.fontSize" marginBottom="10px">
          Genres
        </Box>
        <Genres />
      </div>
      <Divider />
      <div className="filter-item">
        <Box fontSize="h6.fontSize" marginBottom="10px">
          Rating
        </Box>
        <Rating />
      </div>
      <Divider />
      <div className="filter-item">
        <Box fontSize="h6.fontSize" marginBottom="10px">
          Runtime
        </Box>
        <Runtime />
      </div>
      <Divider />
      <div className="filter-item">
        <Box fontSize="h6.fontSize" marginBottom="10px">
          Release Date
        </Box>
        <ReleaseDate />
      </div>
    </Typography>
  );
}

export default FilterDrawer;
