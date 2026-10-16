import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist"; 

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${"e3d9284a561b7f945705a307f184e541"}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;