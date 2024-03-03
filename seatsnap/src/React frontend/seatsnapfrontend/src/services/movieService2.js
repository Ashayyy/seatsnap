import axios from 'axios';

const API_URL = 'http://localhost:8080/movies';

const addMovie = (formData) => {
  return axios.post(API_URL, formData);
};

const getAllMovies = () => {
  return axios.get(API_URL);
};

const getMovieById = (movieId) => {
  if (!movieId) {
    // If movieId is not provided or is undefined, return a Promise that rejects with an error
    return Promise.reject(new Error('Movie ID is required.'));
  }

  // Define the URL for fetching a specific movie by ID
  const movieUrl = `${API_URL}/${movieId}`;

  // Make a GET request to fetch the movie details
  return axios.get(movieUrl);
};

const movieService2 = {
  getAllMovies,
  addMovie,
  getMovieById,
};

export default movieService2;
