

import axios from 'axios';

const API_URL = 'http://localhost:8080/users'; 

// Function to get a user's ID by username
function getUserIdByUsername(username) {
  return axios.get(`${API_URL}?username=${username}`)
    .then((response) => {
      if (response.data.length > 0) {
        return response.data[0].id; 
      } else {
        throw new Error('User not found');
      }
    })
    .catch((error) => {
      throw new Error('User fetch error: ' + error.message);
    });
}

// Export the userService functions
const userService2 = {
  getUserIdByUsername,
};

export default userService2;
