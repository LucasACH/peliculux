import PropTypes from "prop-types";

import Skeleton from "@material-ui/lab/Skeleton";
import SaveButton from "../../shared/SaveButton";
import MovieTitle from "./MovieTitle";
import MovieTitlesSkeleton from "./skeletons/MovieTitleSkeleton";

import posterPlaceholder from "../../../assets/poster-placeholder.png";
import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

function GridItem({
  isLastChild,
  setPage,
  loading,
  hasMore,
  movieId,
  posterPath,
  title,
  releaseDate,
  saved,
  handleSave,
}) {
  // Infinite Scrolling
  const observer = useRef();

  const lastChild = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  if (loading) {
    return (
      <div className="grid-item">
        <Skeleton variant="rect" animation="wave">
          <img src={posterPlaceholder} alt="" />
        </Skeleton>
        <MovieTitlesSkeleton />
      </div>
    );
  }

  return (
    <div className="grid-item" ref={isLastChild ? lastChild : null}>
      <Link to={`/movie/${movieId}`}>
        <img
          src={
            posterPath === null
              ? posterPlaceholder
              : `https://image.tmdb.org/t/p/w300${posterPath}`
          }
          alt=""
        />
        <MovieTitle title={title} releaseDate={releaseDate} />
      </Link>
      <SaveButton saved={saved} onClick={handleSave} />
    </div>
  );
}

GridItem.propTypes = {
  isLastChild: PropTypes.bool,
  setPage: PropTypes.func,
  loading: PropTypes.bool,
  hasMore: PropTypes.bool,
  movieId: PropTypes.number,
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  saved: PropTypes.bool,
  handleSave: PropTypes.func,
};

GridItem.defaultProps = {
  loading: false,
};

export default GridItem;
