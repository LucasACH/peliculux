import React from "react";

import "../../styles/FilterDrawer.css";

function FilterDrawer({ open }) {
  return <div className={open ? "filter-drawer open" : "filter-drawer"}></div>;
}

export default FilterDrawer;
