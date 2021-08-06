import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useDetails from "../../hooks/useDetails";
import { Carousel } from "react-responsive-carousel";
import Skeleton from "@material-ui/lab/Skeleton";
import CarouselBackdrop from "./components/CarouselBackdrop";
import YouTubePlayer from "./components/YouTubePlayer";
import MovieInfo from "../shared/MovieInfo";
import CarouselActions from "./components/CarouselActions";

import "./styles/MovieCarousel.css";
import MovieInfoSkeleton from "../shared/skeletons/MovieInfoSkeleton";

function MovieCarousel({ initLoading, carouselItemCount, movies }) {
  const [moviesIds, setMoviesIds] = useState([]);

  const { loadingDetails, error, movieDetails } = useDetails(
    moviesIds,
    initLoading
  );

  useEffect(() => {
    movies.map((movie) => {
      setMoviesIds((prevMovies) => prevMovies.concat(movie.id));
    });
  }, [initLoading]);

  if (
    initLoading ||
    loadingDetails ||
    movieDetails.length < carouselItemCount
  ) {
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
            <div className="wrapper">
              <MovieInfoSkeleton actions={<CarouselActions loading={true} />} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Carousel
      infiniteLoop
      stopOnHover
      autoPlay
      interval={4000}
      transitionTime={700}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      {movieDetails.map((movie) => (
        <div className="movie-carousel" key={movie.id}>
          <CarouselBackdrop backdropPath={movie.backdrop_path} />
          <div className="content-wrapper">
            <div className="left">
              <YouTubePlayer trailerId={movie.trailer_id} />
            </div>
            <div className="right">
              <div className="wrapper">
                <MovieInfo
                  title={movie.title}
                  releaseDate={movie.release_date}
                  runtime={movie.runtime}
                  rating={movie.vote_average}
                  tagline={movie.tagline}
                  overview={movie.overview}
                  actions={<CarouselActions movieId={movie.id} />}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

MovieCarousel.propTypes = {
  initLoading: PropTypes.bool.isRequired,
  carouselItemCount: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieCarousel;
