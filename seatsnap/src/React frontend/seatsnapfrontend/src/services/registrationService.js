import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

const registerUser = (formData) => {
  return axios.post(`${API_URL}`, formData);
};

export default registerUser; 
