import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

import SaveButton from "../../shared/SaveButton";
import Skeleton from "@material-ui/lab/Skeleton";
import useSaved from "../../../hooks/useSaved";

function CarouselActions({ loading, movieId }) {
  const { savedMovies, handleSave } = useSaved();

  if (loading) {
    return (
      <div className="actions">
        <div>
          <Skeleton animation="wave">
            <Button color="primary" variant="contained">
              More Info
            </Button>
          </Skeleton>
        </div>
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
          More Info
        </Button>
      </div>
      <SaveButton
        saved={savedMovies.includes(movieId)}
        onClick={() => handleSave(movieId)}
      />
    </div>
  );
}

CarouselActions.propTypes = {
  loading: PropTypes.bool,
  movieId: PropTypes.number,
};

export default CarouselActions;
