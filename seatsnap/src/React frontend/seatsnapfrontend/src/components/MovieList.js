import React, { useState, useEffect } from 'react';
import movieService from '../services/movieService';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    movieService
      .getAllMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  const handleAdd = () => {
    navigate('/movies/add-movie');
  };

  

  const handleDelete = (movieId) => {
    movieService
      .deleteMovie(movieId)
      .then(() => {
        console.log('Movie deleted successfully');
        fetchMovies();
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
      });
  };

  const handleUpdate = (movieId) => {
    navigate(`/updateMovieForm/${movieId}`);
  };

  const tableHeader = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  };

  const h = {
    textAlign: 'center',
  };

  const tableCell = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const updateButton = {
    padding: '8px',
    marginRight: '5px',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
  };

  const deleteButton = {
    padding: '8px',
    cursor: 'pointer',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
  };

  const addButton = {
    padding: '8px',
    cursor: 'pointer',
    backgroundColor: 'blue',
    color: '#fff',
    border: 'none',
  };

  return (
    <div>
      <h2 style={h}>List of Movies</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeader}>Title</th>
            <th style={tableHeader}>Genre</th>
            <th style={tableHeader}>Director</th>
            <th style={tableHeader}>Duration (min)</th>
            <th style={tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tableCell}>{movie.title}</td>
              <td style={tableCell}>{movie.genre}</td>
              <td style={tableCell}>{movie.director}</td>
              <td style={tableCell}>{movie.durationMinutes}</td>
              <td style={tableCell}>
                <button style={updateButton} onClick={() => handleUpdate(movie.id)}>
                  Update
                </button>
                <button style={deleteButton} onClick={() => handleDelete(movie.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={addButton} onClick={() => handleAdd()}>
        Add Movie
      </button>
    </div>
  );
};

export default MovieList;
