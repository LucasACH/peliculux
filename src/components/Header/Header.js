import React from "react";

import PrimaryButton from "../shared/PrimaryButton";
import TextButton from "../shared/TextButton";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CodeIcon from "@material-ui/icons/Code";

import "../../styles/Header.css";

function Header() {
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
        <IconButton>
          <CodeIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <TextButton input="Log In" />
        <PrimaryButton input="Sign Up" />
      </div>
    </div>
  );
}

export default Header;
