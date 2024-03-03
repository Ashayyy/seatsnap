// movieService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/movies';

const addMovie = (formData) => {
  return axios.post(`${API_URL}`, formData);
};

const getAllMovies = () => {
  return axios.get(`${API_URL}`);
};

const deleteMovie = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const getMovieById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const updateMovie = (id, formData) => {
  return axios.put(`${API_URL}/${id}`, formData);
};

export default { addMovie, getAllMovies, deleteMovie, getMovieById, updateMovie };
