import { Box, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

function MovieDetailsSkeleton() {
  return (
    <div className="title-wrapper">
      <Typography component="div" color="textPrimary">
        <Box fontWeight="fontWeightBold" fontSize="body1.fontSize" width="70%">
          <Skeleton animation="wave" />
        </Box>
        <Box fontWeight="fontWeightLight" fontSize="body2.fontSize" width="50%">
          <Skeleton animation="wave" />
        </Box>
      </Typography>
    </div>
  );
}

export default MovieDetailsSkeleton;
