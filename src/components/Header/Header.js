import React, { useState, useEffect } from "react";

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

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const getPageYOffset = () => {
    const marker = window.innerHeight * 0.5;
    if (window.pageYOffset > marker) return setIsFixed(true);
    return setIsFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", getPageYOffset);
    return () => {
      window.removeEventListener("scroll", getPageYOffset);
    };
  }, []);

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
          <Tooltip title="Filter">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
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
