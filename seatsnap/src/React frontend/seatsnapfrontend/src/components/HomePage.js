// HomePage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import logo from '../assets/images/logo.png';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import movieService from '../services/movieService';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    movieService
      .getAllMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <div id="site-content">
      {/* <Header /> */}
      <Navbar />

      <div
        className="movie-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          backgroundImage: `url(${require('../assets/bg/1.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Ensures that the background covers the entire viewport
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
