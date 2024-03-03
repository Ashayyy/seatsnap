// UpdateMovieForm.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movieService from '../services/movieService';

const UpdateMovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    director: '',
    durationMinutes: '',
    releaseDate: '',
    description: '',
    posterImageUrl: '',
  });

  useEffect(() => {
    // Fetch movie details using movieId and populate the form fields
    movieService.getMovieById(id)
      .then((response) => {
        const movieData = response.data;
        setFormData({
          title: movieData.title,
          genre: movieData.genre,
          director: movieData.director,
          durationMinutes: movieData.durationMinutes,
          releaseDate: movieData.releaseDate,
          description: movieData.description,
          posterImageUrl: movieData.posterImageUrl,
        });
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the movie using formData
    // ...

    // For example, you can call the movieService.updateMovie method
    movieService.updateMovie(id, formData)
      .then(() => {
        console.log('Movie updated successfully');
        // Redirect to the movie list or wherever you want after updating
        navigate('/movielist');
      })
      .catch((error) => {
        console.error('Error updating movie:', error);
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          required
        />

        <label>Duration (minutes):</label>
        <input
          type="number"
          name="durationMinutes"
          value={formData.durationMinutes}
          onChange={handleChange}
          required
        />

        <label>Release Date:</label>
        <input
          type="date"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label>Poster Image URL:</label>
        <input
          type="text"
          name="posterImageUrl"
          value={formData.posterImageUrl}
          onChange={handleChange}
        />

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
          Update Movie
        </button>
      </form>
      <h1>hello</h1>
    </div>
  );
};

export default UpdateMovieForm;
