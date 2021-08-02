import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { PopularMoviesContext } from "./popularMovies";

export const CarouselMoviesContext = createContext();

export const CarouselMoviesProvider = ({ children }) => {
  const popularMovies = useContext(PopularMoviesContext);

  const [error, setError] = useState(null);
  const [carouselMovies, setCarouselMovies] = useState([]);

  useEffect(() => {
    if (!popularMovies.firstTimeLoading) {
      popularMovies.movies.slice(0, 5).forEach((movie) => {
        axios({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${movie.id}?append_to_response=videos`,
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: "en-US",
          },
        })
          .then((response) => {
            setCarouselMovies((prevMovies) => prevMovies.concat(response.data));
          })
          .catch((error) => setError(error));
      });
    }
  }, [popularMovies.firstTimeLoading]);

  return (
    <CarouselMoviesContext.Provider value={{ error, carouselMovies }}>
      {children}
    </CarouselMoviesContext.Provider>
  );
};
