import React, { useState } from 'react';
import movieService from '../services/movieService';
import MovieList from './MovieList';
import { Navigate,useNavigate,Route,Routes } from 'react-router-dom';

function AddMovieForm({ navigate }) {
  const [redirectToMovies, setRedirectToMovies] = useState(false);
  <div>
    <MovieList/>
  </div>
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    director: '',
    durationMinutes: '',
    releaseDate: '',
    description: '',
    posterImageUrl: '',
  });
 
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);
    setSuccessMessage(null);

    movieService
      .addMovie(formData)
      .then((response) => {
        if (response.status === 201) {
          setSuccessMessage('Movie added successfully!');
          setFormData({
            title: '',
            genre: '',
            director: '',
            durationMinutes: '',
            releaseDate: '',
            description: '',
            posterImageUrl: '',
          });
          setRedirectToMovies(true);
        } else {
          setError('Movie addition failed. Please try again later.');
          console.error('Movie addition failed:', response.data.message);
        }
      })
      .catch((error) => {
        setError('Movie addition failed. Please try again later.');
        console.error('Movie addition error:', error);
      });
      if (redirectToMovies) {
        return <Navigate to="/movielist" />;
      }
    
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ width: '100%', marginBottom: '20px' }}>
          <tbody>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
              </td>
              <td>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Genre</label>
              </td>
              <td>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Director</label>
              </td>
              <td>
                <input
                  type="text"
                  name="director"
                  value={formData.director}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Duration (minutes)</label>
              </td>
              <td>
                <input
                  type="number"
                  name="durationMinutes"
                  value={formData.durationMinutes}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Release Date</label>
              </td>
              <td>
                <input
                  type="date"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
              </td>
              <td>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ display: 'block', marginBottom: '5px' }}>Poster Image URL</label>
              </td>
              <td>
                <input
                  type="text"
                  name="posterImageUrl"
                  value={formData.posterImageUrl}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          style={{
            background: '#3498db',
            color: '#fff',
            padding: '15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '1.2em',
          }}
        >
          Add Movie
        </button>
      </form>
      

      {error && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{successMessage}</div>}
    </div>
  );
}

export default AddMovieForm;
