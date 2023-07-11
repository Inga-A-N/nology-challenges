import React from "react";

const MovieCard = (movie) => {
  const { title, image } = movie;
  return (
    <div>
      <h2>{title}</h2>

      <img src={image} alt={(title = "poster")} />
    </div>
  );
};

export default MovieCard;
