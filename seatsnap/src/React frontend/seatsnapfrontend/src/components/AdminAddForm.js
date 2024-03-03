import React, { useState } from 'react';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Admin Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={styles.label} htmlFor="firstName">
          First Name:
        </label>
        <input
          style={styles.input}
          type="text"
          id="firstName"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <label style={styles.label} htmlFor="lastName">
          Last Name:
        </label>
        <input
          style={styles.input}
          type="text"
          id="lastName"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <label style={styles.label} htmlFor="password">
          Password:
        </label>
        <input
          style={styles.input}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label style={styles.label} htmlFor="username">
          Username:
        </label>
        <input
          style={styles.input}
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AdminForm;
