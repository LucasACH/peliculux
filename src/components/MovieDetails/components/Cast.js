import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import "../styles/Cast.css";

function Cast({ cast }) {
  return cast.map((actor) => (
    <div className="cast-item">
      <img
        src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`}
        alt=""
      />
      <div className="wrapper">
        <Typography component="div" color="textPrimary" noWrap>
          <Box
            fontWeight="fontWeightBold"
            fontSize="body2.fontSize"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {actor.name}
          </Box>
          <Box fontWeight="fontWeightLight" fontSize="body2.fontSize">
            {actor.character}
          </Box>
        </Typography>
      </div>
    </div>
  ));
}

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast;
