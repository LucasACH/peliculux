import { Divider } from "@material-ui/core";
import React from "react";

import "../../styles/FilterDrawer.css";
import Genres from "./components/Genres";

function FilterDrawer({ open }) {
  return (
    <div className={open ? "filter-drawer open" : "filter-drawer"}>
      <div className="filter-item">
        <h4>Genres</h4>
        <Genres />
      </div>
      <Divider />
      <div className="filter-item">
        <h4>Rating</h4>
      </div>
      <Divider />
      <div className="filter-item">
        <h4>Runtime</h4>
      </div>
      <Divider />
      <div className="filter-item">
        <h4>Release Date</h4>
      </div>
    </div>
  );
}

export default FilterDrawer;
