

import axios from 'axios';

const API_URL = 'http://localhost:8080/theaters';

const addTheater = (formData) => {
  return axios.post(`${API_URL}`, formData);
};

const getAllTheaters = () => {
  return axios.get(`${API_URL}`);
};

// Export an object with named exports
const theaterService = {
  addTheater,
  getAllTheaters,
};

export default theaterService; 
