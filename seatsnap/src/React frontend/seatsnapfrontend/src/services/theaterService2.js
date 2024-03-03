import axios from 'axios';

const API_URL = 'http://localhost:8080/theaters';

const addTheater = (formData) => {
  return axios.post(`${API_URL}`, formData);
};

const getAllTheaters = () => {
  return axios.get(`${API_URL}`);
};

const getTheaterById = (theaterId) => {
  const theaterUrl = `${API_URL}/${theaterId}`;
  return axios.get(theaterUrl);
};

const theaterService2 = {
  addTheater,
  getAllTheaters,
  getTheaterById, // Add the getTheaterById function
};

export default theaterService2;
