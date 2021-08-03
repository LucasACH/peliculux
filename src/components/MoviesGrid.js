import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { StateContext } from "../context/StateContext";
import formatMoviesDate from "../helpers/formatMovieDate";
import isLastRow from "../helpers/isLastRow";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Skeleton from "@material-ui/lab/Skeleton";
import spareSpace from "../helpers/spareSpace";
import { SavedMoviesContext } from "../context/SavedMoviesContext";
import { Link } from "react-router-dom";
import loadingPlaceholder from "../loading-placeholder.png";
import "../styles/MoviesGrid.css";

function MoviesGrid({ saved = false }) {
  const moviesContext = useContext(MoviesContext);
  const { filterDrawerState } = useContext(StateContext);
  const savedMovies = useContext(SavedMoviesContext);

  const [columnCount, setColumnCount] = useState(null);

  const observer = useRef();

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1600) setColumnCount(6);
      if (window.innerWidth < 1600) setColumnCount(5);
      if (window.innerWidth <= 1200) setColumnCount(4);
      if (window.innerWidth <= 900) setColumnCount(3);
      if (window.innerWidth <= 700) setColumnCount(2);
      if (window.innerWidth <= 500) setColumnCount(1);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  function handleSaveMovie(movieId) {
    savedMovies.addMovieId(movieId);
  }

  function handleRemoveMovie(movieId) {
    savedMovies.removeMovieId(movieId);
  }

  const lastMovieElementRef = useCallback(
    (node) => {
      if (moviesContext.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && moviesContext.hasMore) {
          moviesContext.setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [moviesContext.loading, moviesContext.hasMore]
  );

  if (moviesContext.loading || moviesContext.error) {
    return (
      <div
        className={
          filterDrawerState ? "movies-grid filter-drawer-open" : "movies-grid"
        }
      >
        {[...Array(20).keys()].map((n, i) => movieItemPlaceholder(n, i))}
      </div>
    );
  }

  return (
    <div
      className={
        filterDrawerState ? "movies-grid filter-drawer-open" : "movies-grid"
      }
    >
      {saved ? (
        <>
          {savedMovies.movies.length > 0 ? (
            savedMovies.movies.map((movie, i) => {
              return movieItem(movie, i);
            })
          ) : (
            <div className="no-movies">
              <Typography color="textPrimary" variant="h5">
                No movies
              </Typography>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button color="primary" href="/" variant="contained">
                  Go to popular
                </Button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          {moviesContext.movies.map((movie, i) => {
            return movieItem(movie, i);
          })}
        </>
      )}

      {saved ? (
        <></>
      ) : (
        <>
          {[
            ...Array(
              spareSpace(moviesContext.movies.length, columnCount)
            ).keys(),
          ].map((n, i) => movieItemPlaceholder(n, i))}
        </>
      )}
    </div>
  );

  function movieItem(movie, i) {
    return (
      <div
        key={movie.id}
        ref={moviesContext.movies.length === i + 1 ? lastMovieElementRef : null}
        className={
          isLastRow(i, moviesContext.movies.length)
            ? "movie-item margin-bottom"
            : "movie-item"
        }
      >
        <img
          src={
            movie.poster_path === null
              ? "/loading-placeholder.png"
              : `https://image.tmdb.org/t/p/w300${movie.poster_path}`
          }
          alt=""
        />
        <div className="content-wrapper">
          <Typography component="div" color="textPrimary">
            <Box fontWeight="fontWeightBold" fontSize="body1.fontSize">
              {movie.title}
            </Box>
            <Box fontWeight="fontWeightLight" fontSize="body2.fontSize">
              {() => formatMoviesDate(movie.release_date)}
            </Box>
          </Typography>
        </div>
        <div className="save-button">
          {savedMovies.movieIds.includes(movie.id) ? (
            <Tooltip title="Remove movie">
              <IconButton onClick={() => handleRemoveMovie(movie.id)}>
                <BookmarkIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Save movie">
              <IconButton onClick={() => handleSaveMovie(movie.id)}>
                <BookmarkBorderIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>
    );
  }

  function movieItemPlaceholder(n, i) {
    return (
      <div
        key={n}
        className={
          isLastRow(i, 20, columnCount)
            ? "movie-item margin-bottom"
            : "movie-item"
        }
      >
        <Skeleton variant="rect" animation="wave">
          <img src={loadingPlaceholder} alt="" />
        </Skeleton>
        <div className="content-wrapper">
          <Typography component="div" color="textPrimary">
            <Box
              fontWeight="fontWeightBold"
              fontSize="body1.fontSize"
              width="70%"
            >
              <Skeleton animation="wave" />
            </Box>
            <Box
              fontWeight="fontWeightLight"
              fontSize="body2.fontSize"
              width="50%"
            >
              <Skeleton animation="wave" />
            </Box>
          </Typography>
        </div>
      </div>
    );
  }
}

export default MoviesGrid;
