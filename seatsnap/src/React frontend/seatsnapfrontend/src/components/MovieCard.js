// MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom'; 

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterImageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
