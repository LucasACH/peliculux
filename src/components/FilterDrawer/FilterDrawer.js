import { Divider, Typography } from "@material-ui/core";
import React from "react";

import Genres from "./components/Genres";
import Rating from "./components/Rating";
import Runtime from "./components/Runtime";

import "../../styles/FilterDrawer.css";
import ReleaseDate from "./components/ReleaseDate";

function FilterDrawer({ open }) {
  return (
    <div className={open ? "filter-drawer open" : "filter-drawer"}>
      <div className="filter-item">
        <Typography
          color="textPrimary"
          variant="h6"
          style={{ marginBottom: "10px" }}
        >
          Genres
        </Typography>
        <Genres />
      </div>
      <Divider />
      <div className="filter-item">
        <Typography
          color="textPrimary"
          variant="h6"
          style={{ marginBottom: "10px" }}
        >
          Rating
        </Typography>
        <Rating />
      </div>
      <Divider />
      <div className="filter-item">
        <Typography
          color="textPrimary"
          variant="h6"
          style={{ marginBottom: "10px" }}
        >
          Runtime
        </Typography>
        <Runtime />
      </div>
      <Divider />
      <div className="filter-item">
        <Typography color="textPrimary" variant="h6">
          Release Date
        </Typography>
        <ReleaseDate />
      </div>
    </div>
  );
}

export default FilterDrawer;
