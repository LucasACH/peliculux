import axios from "axios";
import { useEffect, useState } from "react";

function useDetails(movieId) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: "en-US",
        append_to_response: "videos",
      },
    })
      .then((response) => {
        response.data.videos.forEach((video) => {
          if (video.type === "Trailer" && video.site === "YouTube") {
            response.data.trailer_id = video.key;
          }
        });
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return { loading, movie };
}

export default useDetails;
