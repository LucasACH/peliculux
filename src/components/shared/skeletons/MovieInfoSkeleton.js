import PropTypes from "prop-types";

import { Box, Button, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import MovieSpecs from "../MovieSpecs";

function MovieInfoSkeleton({ actions }) {
  return (
    <Typography component="div" color="textPrimary" className="movie-info">
      <Box fontSize="h5.fontSize" marginBottom={1}>
        <Skeleton animation="wave" width="30%" />
      </Box>
      <MovieSpecs releaseYear="" runtime="" rating="" />
      <Box fontStyle="oblique" fontSize="body1.fontSize" marginBottom={1}>
        <Skeleton animation="wave" width="60%" />
      </Box>
      <Box fontSize="body1.fontSize" marginBottom={1} flex="1 1 auto">
        <Skeleton animation="wave" width="100%" />
        <Skeleton animation="wave" width="100%" />
        <Skeleton animation="wave" width="100%" />
        <Skeleton animation="wave" width="100%" />
        <Skeleton animation="wave" width="30%" />
      </Box>
      {actions}
    </Typography>
  );
}

MovieInfoSkeleton.propTypes = {
  actions: PropTypes.element,
};

export default MovieInfoSkeleton;
