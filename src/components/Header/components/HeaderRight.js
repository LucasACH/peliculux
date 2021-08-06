import PropTypes from "prop-types";

import SortBySelect from "./SortBySelect";

import { Link } from "react-router-dom";

import { IconButton, Tooltip } from "@material-ui/core";

import CodeIcon from "@material-ui/icons/Code";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SettingsIcon from "@material-ui/icons/Settings";
import FilterListIcon from "@material-ui/icons/FilterList";
import { FilterDrawerContext } from "../../../context/FilterDrawerContext";
import { useContext } from "react";

function HeaderRight({ isFixed, isHomeScreen }) {
  const { setOpen } = useContext(FilterDrawerContext);

  function handleFilterDrawerState() {
    setOpen((prevState) => !prevState);
  }

  if (isFixed && !isHomeScreen) {
    return (
      <div className="right">
        <SortBySelect />
        <Tooltip title="Filter">
          <IconButton onClick={handleFilterDrawerState}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="right">
      <Tooltip title="Source code">
        <IconButton>
          <CodeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Saved movies">
        <Link to="/saved-movies">
          <IconButton>
            <BookmarkIcon />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Settings">
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

HeaderRight.propTypes = {
  isFixed: PropTypes.bool.isRequired,
  isHomeScreen: PropTypes.bool.isRequired,
};

export default HeaderRight;
