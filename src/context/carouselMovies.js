import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { PopularMoviesContext } from "./popularMovies";

export const CarouselMoviesContext = createContext();

const API_KEY = "ac2fbae093f0f234fd1e76ffe76cd7ef";

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
          params: { api_key: API_KEY, language: "en-US" },
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
