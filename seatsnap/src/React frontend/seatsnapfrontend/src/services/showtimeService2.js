import axios from 'axios';

const API_URL = 'http://localhost:8080/showtimes';

// Function to fetch all showtimes with related movie and theater data
const getAllShowtimes = () => {
  return axios.get(`${API_URL}`);
};

// Function to add a new showtime
const addShowtime = (formDataWithIds) => {
  return axios.post(API_URL, formDataWithIds);
};

const showtimeService2 = {
  getAllShowtimes, // Add the getAllShowtimes method
  addShowtime, // Add addShowtime
};

export default showtimeService2;
