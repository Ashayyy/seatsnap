import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../services/movieService'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function MovieSelection() {
  const { username } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null); // Declare the 'error' state

  useEffect(() => {
    movieService
      .getAllMovies()
      .then((response) => {
        console.log('Fetched movies:', response.data); // Log fetched data
        setMovies(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch movies. Please try again later.');
        console.error('Movie fetch error:', error);
      });
  }, []);

  const handleMovieSelection = (movieId) => {
    setSelectedMovie(movieId);

    // Use navigate to programmatically go to the next page
    navigate(`/select-theater/${username}/${movieId}`);
  };

  return (
    <div>
      <h2>Welcome, User {username}</h2>
      <h3>Select a Movie</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => handleMovieSelection(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default MovieSelection;
