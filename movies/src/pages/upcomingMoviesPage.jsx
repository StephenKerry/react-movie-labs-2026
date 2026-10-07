import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  // Mirror HomePage favorites logic
  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);

    const favorites = updatedMovies.filter(m => m.favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

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
      selectFavorite={addToFavorites}
    />
  );
};

export default UpcomingMoviesPage;
