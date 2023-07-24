import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (movies) => {
  return (
    <section>
      {movies.map((movie) => (
        <MovieCard />
      ))}
    </section>
  );
};

export default MovieList;
