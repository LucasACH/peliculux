import { Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";
import useSaved from "../../../hooks/useSaved";
import SaveButton from "../../shared/SaveButton";
import YouTubeDialog from "./YouTubeDialog";

function MovieDetailsActions({ loading, trailerId, movieId }) {
  const { savedMovies, handleSave } = useSaved();

  if (loading) {
    return (
      <div className="actions">
        <div>
          <Skeleton animation="wave">
            <Button color="primary" variant="contained">
              Watch Now
            </Button>
          </Skeleton>
        </div>
        <Skeleton animation="wave" variant="circle">
          <YouTubeDialog />
        </Skeleton>
        <Skeleton animation="wave" variant="circle">
          <SaveButton />
        </Skeleton>
      </div>
    );
  }

  return (
    <div className="actions">
      <div>
        <Button color="primary" variant="contained">
          Watch Now
        </Button>
      </div>
      <YouTubeDialog trailerId={trailerId} />
      <SaveButton
        saved={savedMovies.includes(movieId)}
        onClick={() => handleSave(movieId)}
      />
    </div>
  );
}

MovieDetailsActions.propTypes = {
  loading: PropTypes.bool,
  trailerId: PropTypes.string,
  movieId: PropTypes.number,
};

export default MovieDetailsActions;
