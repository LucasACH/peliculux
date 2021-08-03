import Skeleton from "@material-ui/lab/Skeleton";
import useTrailer from "../../hooks/useTrailer";

function YoutubeTrailer({ movieId }) {
  const { trailerId, loading } = useTrailer(movieId);

  if (loading) {
    return (
      <div className="trailer">
        <Skeleton
          animation="wave"
          height="100%"
          width="100%"
          style={{ transform: "none" }}
        ></Skeleton>
      </div>
    );
  }

  return (
    <div className="trailer">
      <iframe
        src={`https://www.youtube.com/embed/${trailerId}`}
        frameBorder="0"
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

export default YoutubeTrailer;
