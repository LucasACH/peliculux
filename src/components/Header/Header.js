import React from "react";

import PrimaryButton from "../shared/PrimaryButton";
import TextButton from "../shared/TextButton";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CodeIcon from "@material-ui/icons/Code";

import "../../styles/Header.css";

function Header() {
  const getPageYOffset = () => {
    const marker = window.innerHeight * 0.7;
    if (window.pageYOffset > marker) return true;
    return false;
  };

  window.addEventListener("scroll", getPageYOffset);

  return (
    <div className="header">
      <div className="left">
        <h1>PELICULUX</h1>
      </div>
      <div className="center">
        <SearchIcon />
        <input type="text" placeholder="Search movies" />
      </div>
      <div className="right">
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
      </div>
    </div>
  );
}

export default Header;
