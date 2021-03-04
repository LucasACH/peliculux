import React, { useContext, useEffect, useState } from "react";

import { IconButton, Tooltip } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import "../../styles/MoviesGrid.css";
import { DataContext } from "../../context/DataProvider";

function MoviesGrid() {
  const n = 20;
  const { filterDrawerState } = useContext(DataContext);
  const [columnCount, setColumnCount] = useState(
    window.innerWidth < 1600 ? 5 : 6
  );

  useEffect(() => {
    const updateSize = () => {
      setColumnCount(window.innerWidth < 1600 ? 5 : 6);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  const isLastRow = (index) => {
    if (n % columnCount === 0 && index > n - (columnCount + 1)) return false;
    if (n % columnCount === columnCount - 1 && index > n - columnCount)
      return false;
    if (n % columnCount === columnCount - 2 && index > n - (columnCount - 1))
      return false;
    if (n % columnCount === columnCount - 3 && index > n - (columnCount - 2))
      return false;
    if (n % columnCount === columnCount - 4 && index > n - (columnCount - 3))
      return false;
    if (n % columnCount === columnCount - 5 && index > n - (columnCount - 4))
      return false;

    return true;
  };

  return (
    <div
      className={
        filterDrawerState ? "movies-grid filter-drawer-open" : "movies-grid"
      }
    >
      {[...Array(n)].map((e, i) => (
        <div
          key={i}
          className={isLastRow(i) ? "movie-item margin-bottom" : "movie-item"}
        >
          <img
            src="https://image.tmdb.org/t/p/w300/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg"
            alt=""
          />
          <div className="content-wrapper">
            <h4>Lorem Ipsum</h4>
            <p className="date">February 26, 2021</p>
          </div>
          <Tooltip title="Save movie">
            <IconButton className="save-button">
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
