import PropTypes from "prop-types";

function YouTubePlayer({ trailerId }) {
  return (
    <div className="trailer">
      <iframe
        src={`https://www.youtube.com/embed/${trailerId}`}
        frameBorder="0"
        loading="lazy"
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
        title="video"
      />
    </div>
  );
}

YouTubePlayer.propTypes = {
  trailerId: PropTypes.string.isRequired,
};

export default YouTubePlayer;
