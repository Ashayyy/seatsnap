import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import registerAdmin from '../services/adminregistrationService'; 

function AdminRegistration() {
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

    // Perform client-side validation (e.g., check for empty fields)
    if (!formData.username || !formData.password || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }

    registerAdmin(formData)
      .then((response) => {
        if (response.status === 201) {
          console.log('Admin Registration successful!', response.data);

          setSuccessMessage('Admin Registration successful!');
          setFormData(initialFormData); // Clear the form
        } else {
          setError('Admin Registration failed. Please try again later.');
          console.error('Admin Registration failed:', response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
          console.error('Admin Registration error:', error.response.data);
        } else {
          setError('Admin Registration failed. Please try again later.');
          console.error('Admin Registration failed:', error);
        }
      });
  };

  
  const adminFields = [
    { name: 'username', label: 'Username', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
   
  ];

  return (
    <div>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        {adminFields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            fullWidth
            required={field.required}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
    </div>
  );
}

export default AdminRegistration;
