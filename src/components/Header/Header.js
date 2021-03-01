import React, { useState, useEffect, useContext } from "react";

import PrimaryButton from "../shared/PrimaryButton";
import TextButton from "../shared/TextButton";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CodeIcon from "@material-ui/icons/Code";
import FilterListIcon from "@material-ui/icons/FilterList";

import "../../styles/Header.css";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import { DataContext } from "../../context/DataProvider";
import SortBySelect from "./SortBySelect";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const { filterDrawerState, setFilterDrawerState } = useContext(DataContext);

  const getPageYOffset = () => {
    const offsetMarker = window.innerHeight * 0.6;
    if (window.pageYOffset > offsetMarker) return setIsFixed(true);
    return [setIsFixed(false), setFilterDrawerState(false)];
  };

  useEffect(() => {
    window.addEventListener("scroll", getPageYOffset);
    return () => {
      window.removeEventListener("scroll", getPageYOffset);
    };
  });

  const handleFilterDrawerState = () => {
    setFilterDrawerState(!filterDrawerState);
  };

  return (
    <div className={isFixed ? "header fixed" : "header"}>
      <div className="left">
        <h1>PELICULUX</h1>
      </div>
      <div className="center">
        <SearchIcon />
        <input type="text" placeholder="Search movies" />
      </div>
      <div className="right">
        {isFixed ? (
          <>
            <SortBySelect />
            <Tooltip title="Filter">
              <IconButton onClick={handleFilterDrawerState}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <FilterDrawer open={filterDrawerState} />
          </>
        ) : (
          <>
            <Tooltip title="Source code">
              <IconButton>
                <CodeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Saved movies">
              <IconButton>
                <BookmarkIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <TextButton input="Log In" />
            <PrimaryButton input="Sign Up" />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
