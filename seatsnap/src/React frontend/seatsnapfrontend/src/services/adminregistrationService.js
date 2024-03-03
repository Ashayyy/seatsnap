import axios from 'axios';

const API_URL = 'http://localhost:8080/admins'; 

const registerAdmin = (formData) => {
  return axios.post(API_URL, formData);
};

export default registerAdmin; 
