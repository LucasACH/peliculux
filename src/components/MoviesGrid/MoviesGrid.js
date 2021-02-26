import React from "react";

import { IconButton } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import "../../styles/MoviesGrid.css";

function MoviesGrid() {
  const n = 20;

  const isLastRow = (index) => {
    if (n % 5 === 0 && index > n - 6) return false;
    if (n % 5 === 4 && index > n - 5) return false;
    if (n % 5 === 3 && index > n - 4) return false;
    if (n % 5 === 2 && index > n - 3) return false;
    if (n % 5 === 1 && index > n - 2) return false;
    return true;
  };

  return (
    <div className="movies-grid">
      {[...Array(n)].map((e, i) => (
        <div
          className={isLastRow(i) ? "movie-item margin-bottom" : "movie-item"}
        >
          {/* <img
            src="https://image.tmdb.org/t/p/w300/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg"
            alt=""
          /> */}
          <div className="content-wrapper">
            <h4>Lorem Ipsum</h4>
            <p className="date">February 26, 2021</p>
          </div>
          <IconButton className="save-button">
            <BookmarkBorderIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
