import { createContext, useEffect, useState } from "react";
import axios from "axios";
import formatReleaseDate from "../helpers/formatReleaseDate";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState([1, 10]);
  const [runtime, setRuntime] = useState([1, 360]);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(formatReleaseDate(new Date()));

  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [movies, setMovies] = useState([]);
  const [carouselMovies, setCarouselMovies] = useState([]);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    if (page === 1 && !firstLoad) {
      setLoading(true);
      setMovies([]);
      window.scrollTo(0, window.innerHeight * 0.7);
    }

    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      cancelToken: source.token,
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        page: page,
        sort_by: sortBy,
        with_genres: genres.join(", "),
        "vote_average.gte": rating[0],
        "vote_average.lte": rating[1],
        "with_runtime.gte": runtime[0],
        "with_runtime.lte": runtime[1],
        "release_date.gte": from,
        "release_date.lte": to,
      },
    })
      .then((response) => {
        setHasMore(response.data.results.length > 0);
        setMovies((prevMovies) => prevMovies.concat(response.data.results));

        if (firstLoad) {
          response.data.results.slice(0, 5).map((movie) => {
            return axios({
              method: "GET",
              url: `https://api.themoviedb.org/3/movie/${movie.id}`,
              params: {
                api_key: process.env.REACT_APP_TMDB_API_KEY,
                language: "en-US",
                append_to_response: "videos",
              },
            })
              .then((response) => {
                response.data.videos.results.forEach((video) => {
                  if (video.type === "Trailer" && video.site === "YouTube") {
                    response.data.trailer_id = video.key;
                  }
                });
                setCarouselMovies((prevMovies) =>
                  prevMovies.concat(response.data)
                );
                setFirstLoad(false);
              })
              .catch((error) => console.error(error));
          });
        }
        setLoading(false);
      })
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        } else {
          setError(error);
        }
      });

    return () => source.cancel("Operation canceled by the user.");
  }, [page, sortBy, genres, rating, runtime, from, to]);

  return (
    <MoviesContext.Provider
      value={{
        page,
        setPage,
        loading,
        error,
        hasMore,
        movies,
        carouselMovies,
        sortBy,
        setSortBy,
        genres,
        setGenres,
        rating,
        setRating,
        runtime,
        setRuntime,
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
