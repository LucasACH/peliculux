import PropTypes from "prop-types";

function CarouselBackdrop({ backdropPath }) {
  return (
    <div className="slider-backdrop">
      <img
        src={`https://image.tmdb.org/t/p/w1280${backdropPath}`}
        alt=""
        loading="lazy"
      />
    </div>
  );
}

CarouselBackdrop.propTypes = {
  backdropPath: PropTypes.string.isRequired,
};

export default CarouselBackdrop;
