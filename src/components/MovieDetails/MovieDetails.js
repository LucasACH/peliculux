import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useDetails from "../../hooks/useDetails";
import MovieSpecs from "../shared/MovieSpecs";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "./styles/MovieDetails.css";
import formatReleaseDate from "../../helpers/formatReleaseDate";
import MovieDetailsLeft from "./components/MovieDetailsLeft";

function MovieDetails() {
  let { movie_id } = useParams();

  const [movieId, setMovieId] = useState([]);
  const [open, setOpen] = useState(false);

  const { loadingDetails, error, movieDetails } = useDetails(movieId);

  useEffect(() => {
    setMovieId([movie_id]);
  }, []);

  if (loadingDetails) {
    return <div>Loading</div>;
  }

  return (
    <div className="movie-details">
      <div className="backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movieDetails[0].backdrop_path}`}
          alt=""
        />
      </div>
      <div className="wrapper">
        <MovieDetailsLeft
          movieId={movieDetails[0].id}
          posterPath={movieDetails[0].poster_path}
          trailerId={movieDetails[0].trailer_id}
          title={movieDetails[0].title}
          releaseDate={formatReleaseDate(movieDetails[0].releaseDate)}
          runtime={movieDetails[0].runtime}
          rating={movieDetails[0].vote_average}
          tagline={movieDetails[0].tagline}
          overview={movieDetails[0].overview}
          cast={movieDetails[0].credits.cast.slice(0, 8)}
        />
        <div className="right">
          <div className="upper"></div>
          <div className="lower"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
