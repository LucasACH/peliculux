import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import placeholder from "../../placeholder.jpg";

import "../../styles/MovieDetails.css";
import MovieSpecs from "../shared/MovieSpecs";
import YoutubeButton from "../shared/YoutubeButton";
import Cast from "./components/Cast";
import ExtraInfo from "./components/ExtraInfo";
import WatchTrailer from "./components/WatchTrailer";

function MovieDetails() {
  // let { movie_id } = useParams();
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div className="movie-details">
      <div className="movie-details-backdrop">
        <img src={placeholder} alt="" />
      </div>
      <div className="content-wrapper">
        <div className="left">
          <div className="upper">
            <img
              src="https://image.tmdb.org/t/p/w500/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg"
              alt=""
            />
            <div className="movie-data">
              <h1>Lorem ipsum</h1>
              <MovieSpecs releaseYear="2020" runtime="125 min" rating="6.8" />
              <p className="tagline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <div className="genres">
                <p>
                  <b>Genres: </b> Lorem ipsum, Lorem ipsum, Lorem ipsum
                </p>
              </div>
              <div className="overview">
                <p>
                  Cras sed risus tincidunt, auctor mauris ac, vestibulum quam.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Donec congue ullamcorper
                  est imperdiet congue. Mauris dictum ultrices leo, ut dictum
                  dui fermentum vel. Sed porta semper massa, sed mollis felis
                  auctor at. Nunc vehicula laoreet sapien. Mauris dictum
                  ultrices leo, ut dictum dui fermentum vel. Sed porta semper
                  massa, sed mollis felis auctor at. Nunc vehicula laoreet
                  sapien.
                </p>
              </div>
              <div className="actions">
                <YoutubeButton handleClick={openDialog} />
                <WatchTrailer handleOpen={open} handleClose={closeDialog} />
              </div>
            </div>
          </div>
          <div className="lower">
            <Cast />
          </div>
        </div>
        <div className="right">
          <ExtraInfo />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
