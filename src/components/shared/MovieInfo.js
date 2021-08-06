import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import MovieSpecs from "./MovieSpecs";

import "./styles/MovieInfo.css";

function MovieInfo({
  title,
  releaseDate,
  runtime,
  rating,
  tagline,
  overview,
  actions,
}) {
  return (
    <Typography component="div" color="textPrimary" className="movie-info">
      <Box fontSize="h5.fontSize" marginBottom={1}>
        {title}
      </Box>
      <MovieSpecs
        releaseYear={new Date(releaseDate).getFullYear()}
        runtime={runtime}
        rating={rating}
      />
      <Box fontStyle="oblique" fontSize="body1.fontSize" marginBottom={1}>
        {tagline}
      </Box>
      <Box
        fontSize="body1.fontSize"
        marginBottom={1}
        flex="1 1 auto"
        overflow="scroll"
      >
        {overview}
      </Box>

      {actions}
    </Typography>
  );
}

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  actions: PropTypes.element.isRequired,
};

export default MovieInfo;
