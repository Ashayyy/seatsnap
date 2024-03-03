import React, { useState, useEffect } from 'react';
import theaterService from '../services/theaterService';
import movieService from '../services/movieService';
import showtimeService from '../services/showtimeService';

function AddShowtimeForm() {
  const [formData, setFormData] = useState({
    movie: '',
    theater: '',
    startTime: '',
    endTime: '',
  });

  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    movieService
      .getAllMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch movies. Please try again later.');
        console.error('Movie fetch error:', error);
      });

    theaterService
      .getAllTheaters()
      .then((response) => {
        setTheaters(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch theaters. Please try again later.');
        console.error('Theater fetch error:', error);
      });
  }, []);

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

    showtimeService
      .addShowtime(formData)
      .then((response) => {
        if (response.status === 201) {
          setSuccessMessage('Showtime added successfully!');
          setFormData({
            movie: '',
            theater: '',
            startTime: '',
            endTime: '',
          });
        } else {
          setError('Showtime addition failed. Please try again later.');
          console.error('Showtime addition failed:', response.data.message);
        }
      })
      .catch((error) => {
        setError('Showtime addition failed. Please try again later.');
        console.error('Showtime addition error:', error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Showtime</h2>
      <form onSubmit={handleSubmit} style={{ margin: '0 auto', maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="movie">Select Movie:</label>
          <select
            name="movie"
            value={formData.movie}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="" disabled>
              Select a Movie
            </option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="theater">Select Theater:</label>
          <select
            name="theater"
            value={formData.theater}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="" disabled>
              Select a Theater
            </option>
            {theaters.map((theater) => (
              <option key={theater.id} value={theater.id}>
                {theater.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Showtime
        </button>
      </form>

      {error && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</div>}
      {successMessage && (
        <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{successMessage}</div>
      )}
    </div>
  );
}

export default AddShowtimeForm;
