import React, { useState } from 'react';

function AddBookingForm({ onAddBooking, movies, theaters, showtimes, currentUserId }) {
  const [formData, setFormData] = useState({
    movieId: '',
    theaterId: '',
    showtimeId: '',
    userId: currentUserId,
    bookingDateTime: new Date().toISOString(),
    seatNo: '',
  });

  const filteredShowtimes = showtimes.filter((showtime) => (
    showtime.theater.id === formData.theaterId && showtime.movie.id === formData.movieId
  ));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.movieId && formData.theaterId && formData.showtimeId) {
      const bookingData = {
        movieId: formData.movieId,
        theaterId: formData.theaterId,
        showtimeId: formData.showtimeId,
        userId: formData.userId,
        bookingDateTime: formData.bookingDateTime,
        seatNo: formData.seatNo,
      };

      onAddBooking(bookingData);

      setFormData({
        movieId: '',
        theaterId: '',
        showtimeId: '',
        userId: currentUserId,
        bookingDateTime: new Date().toISOString(),
        seatNo: '',
      });
    } else {
      console.error('One or more dropdowns are empty. Please select options for all fields.');
      // set an error message state here and display it to the user
    }
  };

  return (
    <div>
      <h2>Add Booking</h2>
      <form onSubmit={handleSubmit}>
        {/* Dropdowns for selecting movie, theater, and showtime */}
        <select
          name="movieId"
          value={formData.movieId}
          onChange={(e) => setFormData({ ...formData, movieId: e.target.value })}
          required
        >
          <option value="">Select a Movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>

        {formData.movieId && (
          <select
            name="theaterId"
            value={formData.theaterId}
            onChange={(e) => setFormData({ ...formData, theaterId: e.target.value })}
            required
          >
            <option value="">Select a Theater</option>
            {theaters.map((theater) => (
              <option key={theater.id} value={theater.id}>
                {theater.name}
              </option>
            ))}
          </select>
        )}

        {formData.theaterId && formData.movieId && (
          <select
            name="showtimeId"
            value={formData.showtimeId}
            onChange={(e) => setFormData({ ...formData, showtimeId: e.target.value })}
            required
          >
            <option value="">Select a Showtime</option>
            {filteredShowtimes.map((showtime) => (
              <option key={showtime.id} value={showtime.id}>
                {showtime.startTime} - {showtime.endTime}
              </option>
            ))}
          </select>
        )}

        {/* Input for seat number */}
        <input
          type="text"
          name="seatNo"
          value={formData.seatNo}
          onChange={(e) => setFormData({ ...formData, seatNo: e.target.value })}
          placeholder="Enter Seat Number"
          required
        />

        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
}

export default AddBookingForm;
