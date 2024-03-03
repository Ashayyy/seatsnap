import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddTheaterForm from './AddTheaterForm';
import AddMovieForm from './AddMovieForm';
import AddShowtimeForm from './AddShowtimeForm';

function WelcomeAdmin() {
  const { username } = useParams();
  const navigate = useNavigate();

  const buttonStyle = {
    padding: '20px', // Adjust the padding to make the buttons larger
    fontSize: '3em', // Adjust the font size to make the buttons larger
    margin: '10px', // Add margin for spacing between buttons
    cursor: 'pointer',
  };

  const handleAddTheaterClick = () => {
    navigate('/theaters/add-theater');
  };

  // const handleAddMovieClick = () => {
  //   navigate('/movies/add-movie');
  // };
  const handleAddMovieClick = () => {
    navigate('/movielist');
  };

  const handleAddShowtimeClick = () => {
    navigate('/showtimes/add-showtime');
  };
  const handleAddAdmin = () => {
    navigate('/adminForm');
  };

  return (
    <div>
      <h2>Welcome, Admin {username}</h2>
      <button
        onClick={handleAddTheaterClick}
        style={{ ...buttonStyle, background: '#3498db', color: '#fff' }}
      >
        Add Theater
      </button>
      <button
        onClick={handleAddMovieClick}
        style={{ ...buttonStyle, background: '#2ecc71', color: '#fff' }}
      >
        Movie List
      </button>
      <button
        onClick={handleAddShowtimeClick}
        style={{ ...buttonStyle, background: '#e74c3c', color: '#fff' }}
      >
        Add Showtime
      </button>
      <button
        onClick={handleAddAdmin()}
        style={{ ...buttonStyle, background: '#blue', color: '#fff' }}
      >
        Add Admin
      </button>
    </div>
  );
}

export default WelcomeAdmin;
