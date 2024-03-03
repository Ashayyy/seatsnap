
import axios from 'axios';

const API_URL = 'http://localhost:8080/bookings';

const addBooking = (formData) => {
  return axios.post(`${API_URL}`, formData);
};

const getBookingById = (bookingId) => {
  return axios.get(`${API_URL}/${bookingId}`);
};

const updateBooking = (bookingId, formData) => {
  return axios.put(`${API_URL}/${bookingId}`, formData);
};

const deleteBooking = (bookingId) => {
  return axios.delete(`${API_URL}/${bookingId}`);
};

const bookingService = {
  addBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};

export default bookingService;
