import React, { useState } from 'react';
import theaterService from '../services/theaterService';

function AddTheaterForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    capacity: '',
    facilities: '',
  });

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

    theaterService
      .addTheater(formData)
      .then((response) => {
        if (response.status === 201) {
          setSuccessMessage('Theater added successfully!');
          setFormData({
            name: '',
            location: '',
            capacity: '',
            facilities: '',
          });
        } else {
          setError('Theater addition failed. Please try again later.');
          console.error('Theater addition failed:', response.data.message);
        }
      })
      .catch((error) => {
        setError('Theater addition failed. Please try again later.');
        console.error('Theater addition error:', error);
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add Theater</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <label>Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <label>Facilities:</label>
        <input
          type="text"
          name="facilities"
          value={formData.facilities}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <button
          type="submit"
          style={{
            background: '#3498db',
            color: '#fff',
            padding: '15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '1.2em',
          }}
        >
          Add Theater
        </button>
      </form>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>}
    </div>
  );
}

export default AddTheaterForm;
