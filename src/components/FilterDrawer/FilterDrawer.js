import { Divider } from "@material-ui/core";
import React from "react";

import "../../styles/FilterDrawer.css";

function FilterDrawer({ open }) {
  return (
    <div className={open ? "filter-drawer open" : "filter-drawer"}>
      <div className="filter-item">
        <p>Genres</p>
      </div>
      <Divider />
      <div className="filter-item">
        <p>Rating</p>
      </div>
      <Divider />
      <div className="filter-item">
        <p>Runtime</p>
      </div>
      <Divider />
      <div className="filter-item">
        <p>Release Date</p>
      </div>
    </div>
  );
}

export default FilterDrawer;
