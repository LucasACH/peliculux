import axios from "axios";
import { useEffect, useState } from "react";

function useDetails(moviesIds, loading) {
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [error, setError] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    setLoadingDetails(true);

    moviesIds.map((movieId, i) => {
      return axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieId}`,
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: "en-US",
          append_to_response: "videos,credits",
        },
      })
        .then((response) => {
          response.data.videos.results.forEach((video) => {
            if (video.type === "Trailer" && video.site === "YouTube") {
              response.data.trailer_id = video.key;
            }
          });
          setMovieDetails((prevMovies) => prevMovies.concat(response.data));
          setLoadingDetails(moviesIds.length < i + 1);
        })
        .catch(function (thrown) {
          if (axios.isCancel(thrown)) {
            console.log("Request canceled", thrown.message);
          } else {
            setError(thrown.message);
          }
        });
    });

    return () => source.cancel("Operation canceled by the user.");
  }, [loading, moviesIds]);

  return { loadingDetails, error, movieDetails };
}

export default useDetails;
