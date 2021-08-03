import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import MovieSpecs from "./shared/MovieSpecs";
import YoutubeTrailer from "./shared/YoutubeTrailer";

import Skeleton from "@material-ui/lab/Skeleton";
import { Box, Button, Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";

import "../styles/MovieCarousel.css";

function MovieCarousel() {
  const moviesContext = useContext(MoviesContext);

  if (moviesContext.carouselMovies.length < 5) {
    return (
      <div className="movie-carousel">
        <div className="content-wrapper">
          <div className="left">
            <div className="trailer">
              <Skeleton
                animation="wave"
                height="100%"
                width="100%"
                style={{ transform: "none" }}
              ></Skeleton>
            </div>
          </div>
          <div className="right">
            <div className="content-wrapper">
              <Typography variant="h5" color="textPrimary">
                <Skeleton animation="wave" width="30%" />
              </Typography>
              <MovieSpecs releaseYear="" runtime="" rating="" />
              <Typography component="div" color="textPrimary">
                <Box fontStyle="oblique" marginBottom={1}>
                  <Skeleton animation="wave" width="60%" />
                </Box>
              </Typography>
              <div className="overview">
                <Typography variant="body1" color="textPrimary">
                  <Skeleton animation="wave" width="100%" />
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  <Skeleton animation="wave" width="100%" />
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  <Skeleton animation="wave" width="100%" />
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  <Skeleton animation="wave" width="100%" />
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  <Skeleton animation="wave" width="30%" />
                </Typography>
              </div>
              <div className="actions">
                <Skeleton animation="wave">
                  <Button color="primary" variant="contained">
                    Watch Now
                  </Button>
                </Skeleton>
                <Skeleton animation="wave">
                  <Button color="default" variant="text">
                    More Info
                  </Button>
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Carousel
      showThumbs={false}
      interval={4000}
      transitionTime={700}
      autoPlay
      stopOnHover
      showStatus={false}
      infiniteLoop
      showArrows={false}
    >
      {moviesContext.carouselMovies.map((movie) => {
        return (
          <div className="movie-carousel" key={movie.id}>
            <div className="slider-backdrop">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="content-wrapper">
              <div className="left">
                <YoutubeTrailer movieId={movie.id} />
              </div>
              <div className="right">
                <div className="content-wrapper">
                  <Typography variant="h5" color="textPrimary">
                    {movie.title}
                  </Typography>
                  <MovieSpecs
                    releaseYear={new Date(movie.release_date).getFullYear()}
                    runtime={movie.runtime}
                    rating={movie.vote_average}
                  />
                  <Typography component="div" color="textPrimary">
                    <Box fontStyle="oblique" marginBottom={1}>
                      {movie.tagline}
                    </Box>
                  </Typography>
                  <div className="overview">
                    <Typography variant="body1" color="textPrimary">
                      {movie.overview}
                    </Typography>
                  </div>
                  <div className="actions">
                    <Button color="primary" variant="contained">
                      Watch Now
                    </Button>
                    <Button color="default" variant="text">
                      More Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default MovieCarousel;
