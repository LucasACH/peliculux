import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { StateContext } from "../../context/state";

import FilterDrawer from "../FilterDrawer/FilterDrawer";
import SortBySelect from "./SortBySelect";

import { Box, InputAdornment, TextField, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CodeIcon from "@material-ui/icons/Code";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SettingsIcon from "@material-ui/icons/Settings";
import FilterListIcon from "@material-ui/icons/FilterList";

import "../../styles/Header.css";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const state = useContext(StateContext);

  const getPageYOffset = () => {
    const offsetMarker = window.innerHeight * 0.6;
    if (window.pageYOffset > offsetMarker) return setIsFixed(true);
    return [setIsFixed(false), state.setFilterDrawerState(false)];
  };

  useEffect(() => {
    window.addEventListener("scroll", getPageYOffset);
    return () => {
      window.removeEventListener("scroll", getPageYOffset);
    };
  });

  const handleFilterDrawerState = () => {
    state.setFilterDrawerState(!state.filterDrawerState);
  };

  return (
    <div className={isFixed ? "header fixed" : "header"}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography component="div" color="textPrimary">
            <Box m={0} fontSize="h4.fontSize">
              PELICULUX
            </Box>
          </Typography>
        </Link>
      </div>
      <div className="center">
        <TextField
          placeholder="Search movies"
          variant="filled"
          fullWidth
          size="small"
          inputMode="text"
          margin="none"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
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
            <FilterDrawer open={state.filterDrawerState} />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
