import React, { useState } from 'react';
import registerUser from '../services/registrationService';
import Navbar from './Navbar';
import Footer from './Footer';

function Registration() {
  const initialFormData = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const inputStyle = {
    marginBottom: '15px',
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: 'white', // Changed font color to white
    fontWeight: 'bold',
  };

  const buttonStyle = {
    background: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);
    setSuccessMessage(null);

    if (!formData.username || !formData.password || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }

    registerUser(formData)
      .then((response) => {
        if (response.status === 201) {
          setSuccessMessage('Registration successful!');
          setFormData(initialFormData);
        } else {
          setError('Registration failed. Please try again later.');
          console.error('Registration failed:', response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
          console.error('Registration error:', error.response.data);
        } else {
          setError('Registration failed. Please try again later.');
          console.error('Registration failed:', error);
        }
      });
  };

  return (
    <div style={formStyle}>
      <Navbar/>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

      {successMessage && <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>}
      <Footer/>
    </div>
  );
}

export default Registration;
