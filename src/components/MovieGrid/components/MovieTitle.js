import PropTypes from "prop-types";

import formatMovieDate from "../helpers/formatMovieDate";

import { Box, Typography } from "@material-ui/core";

function MovieTitle({ title, releaseDate }) {
  return (
    <div className="title-wrapper">
      <Typography component="div" color="textPrimary" noWrap>
        <Box
          fontWeight="fontWeightBold"
          fontSize="body1.fontSize"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {title}
        </Box>
        <Box fontWeight="fontWeightLight" fontSize="body2.fontSize">
          {() => formatMovieDate(releaseDate)}
        </Box>
      </Typography>
    </div>
  );
}

MovieTitle.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default MovieTitle;
