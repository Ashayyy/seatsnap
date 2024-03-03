import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/loginService'; // Import the login function
import Navbar from './Navbar';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    loginType: 'user',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);

      if (response.success) {
        setMessage(`Login successful as ${response.data.username}`);
        const redirectPath = `/welcome-${formData.loginType}/${response.data.username}`;
        navigate(redirectPath);
      } else {
        console.error('Authentication failed', response.error);
        setMessage('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2 style={{textAlign: 'center' }}>Login</h2>
      <Navbar/>
      <form onSubmit={handleSubmit} style={{ margin: '0 auto', width: '300px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Login Type:</label>
          <select
            name="loginType"
            value={formData.loginType}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button type="submit" style={{ width: '100%' }}>
            Login
          </button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default Login;
