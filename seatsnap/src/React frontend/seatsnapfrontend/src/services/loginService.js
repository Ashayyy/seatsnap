import axios from 'axios';

const baseURL = 'http://localhost:8080';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (formData) => {
  try {
    const { loginType, ...restFormData } = formData;
    const endpoint = loginType === 'admin' ? '/admins/login' : '/users/login';
    const response = await instance.post(endpoint, restFormData);

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      console.error('Authentication failed', response);
      return { success: false, error: 'Authentication failed' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: 'An error occurred. Please try again later.' };
  }
};
