import React from "react";

import placeholder from "../../placeholder.jpg";

import MovieSpecs from "../shared/MovieSpecs";
import PrimaryButton from "../shared/PrimaryButton";
import TextButton from "../shared/TextButton";

import "../../styles/MovieCarousel.css";

function MovieCarousel() {
  return (
    <div className="movie-carousel">
      <div className="slider-backdrop">
        <img src={placeholder} alt="" />
      </div>
      <div className="content-wrapper">
        <div className="left">
          <div className="trailer">
            <iframe
              src="https://www.youtube.com/embed/"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              title="video"
            />
          </div>
        </div>
        <div className="right">
          <div className="content-wrapper">
            <h1>Lorem ipsum</h1>
            <MovieSpecs releaseYear="2020" runtime="125 min" rating="6.8" />
            <p className="tagline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="overview">
              <p>
                Cras sed risus tincidunt, auctor mauris ac, vestibulum quam.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Donec congue ullamcorper est
                imperdiet congue. Mauris dictum ultrices leo, ut dictum dui
                fermentum vel. Sed porta semper massa, sed mollis felis auctor
                at. Nunc vehicula laoreet sapien. Mauris dictum ultrices leo, ut
                dictum dui fermentum vel. Sed porta semper massa, sed mollis
                felis auctor at. Nunc vehicula laoreet sapien.
              </p>
            </div>
            <div className="actions">
              <PrimaryButton input="Watch Now" />
              <TextButton input="More Info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel;
