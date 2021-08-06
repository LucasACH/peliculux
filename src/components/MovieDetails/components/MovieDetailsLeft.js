import PropTypes from "prop-types";

import MovieInfo from "../../shared/MovieInfo";
import Cast from "./Cast";
import MovieDetailsActions from "./MovieDetailsActions";

function MovieDetailsLeft({
  movieId,
  posterPath,
  trailerId,
  title,
  releaseDate,
  runtime,
  rating,
  tagline,
  overview,
  cast,
}) {
  return (
    <div className="left">
      <div className="upper">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="" />
        <MovieInfo
          title={title}
          releaseDate={releaseDate}
          runtime={runtime}
          rating={rating}
          tagline={tagline}
          overview={overview}
          actions={
            <MovieDetailsActions trailerId={trailerId} movieId={movieId} />
          }
        />
      </div>
      <div className="lower">
        <Cast cast={cast} />
      </div>
    </div>
  );
}

MovieDetailsLeft.propTypes = {
  movieId: PropTypes.number,
  posterPath: PropTypes.string,
  trailerId: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  runtime: PropTypes.number,
  rating: PropTypes.number,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  cast: PropTypes.array,
};

export default MovieDetailsLeft;
