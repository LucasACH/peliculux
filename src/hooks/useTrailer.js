import axios from "axios";
import { useEffect, useState } from "react";

function useTrailer(movieId) {
  const [loading, setLoading] = useState(true);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: "en-US",
      },
    })
      .then((response) => {
        let movieTrailerId = "";
        response.data.results.forEach((video) => {
          if (
            movieTrailerId === "" &&
            video.type === "Trailer" &&
            video.site === "YouTube"
          ) {
            movieTrailerId = video.key;
          }
        });
        setLoading(false);
        setTrailerId(movieTrailerId);
      })
      .catch((error) => console.error(error));
  }, []);

  return { loading, trailerId };
}

export default useTrailer;
