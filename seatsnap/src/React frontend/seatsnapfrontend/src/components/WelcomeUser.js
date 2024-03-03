import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import showtimeService2 from '../services/showtimeService2';
import bookingService from '../services/bookingService';
import userService2 from '../services/userService2';

function WelcomeUser() {
  const { username } = useParams();

  const [data, setData] = useState({
    showtimes: [],
    selectedShowtime: null,
    currentUserId: null,
    selectedSeat: '',
    bookingSuccess: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showtimeResponse = await showtimeService2.getAllShowtimes();
        const userId = await userService2.getUserIdByUsername(username);
        setData((prevData) => ({
          ...prevData,
          showtimes: showtimeResponse.data,
          currentUserId: userId,
          loading: false,
        }));
      } catch (error) {
        setData((prevData) => ({
          ...prevData,
          error: 'Data fetch error',
          loading: false,
        }));
        console.error('Data fetch error:', error);
      }
    };

    fetchData();
  }, [username]);

  const handleSelectShowtime = (showtime) => {
    if (showtime.movie && showtime.theater) {
      setData((prevData) => ({
        ...prevData,
        selectedShowtime: showtime,
      }));
    } else {
      console.error('Movie or theater details are missing in the showtime object');
    }
  };

  const handleSeatSelect = (seat) => {
    setData((prevData) => ({
      ...prevData,
      selectedSeat: seat,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!data.selectedShowtime || !data.currentUserId || !data.selectedSeat) {
      console.error('Selected showtime, user ID, or seat is missing.');
      return;
    }

    const bookingData = {
      showtimeId: data.selectedShowtime.id,
      userId: data.currentUserId,
      bookingDatetime: new Date().toISOString(),
      seatNo: data.selectedSeat,
    };

    try {
      const response = await bookingService.addBooking(bookingData);

      if (response.status === 201) {
        console.log('Booking added successfully!');
        setData((prevData) => ({
          ...prevData,
          bookingSuccess: true,
        }));
        
      } else {
        console.error('Booking addition failed:', response.data.message);
      }
    } catch (error) {
      console.error('Booking addition error:', error);
    }
  };

 const generateSeatOptions = () => {
  const seatOptions = [];

  for (let row = 48; row >= 1; row--) { // Start from 48 and go down to 1
    for (let seat = 'A'; seat <= 'F'; seat = String.fromCharCode(seat.charCodeAt(0) + 1)) {
      seatOptions.push(`${row}${seat}`);
    }
  }

  return seatOptions;
};

  return (
    <div>
      <h2>Welcome, {username}</h2>
      {data.loading ? (
        <p>Loading...</p>
      ) : data.error ? (
        <p>Error: {data.error}</p>
      ) : (
        <form onSubmit={handleBookingSubmit}>
          <h3>Select a Showtime to Book:</h3>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  {data.showtimes.map((showtime) => (
                    <TableCell key={showtime.id}>
                      <label>
                        <input
                          type="radio"
                          name="showtime"
                          value={showtime.id}
                          onChange={() => handleSelectShowtime(showtime)}
                        />
                        <p style={{ color: 'white' }}>
                          Movie: {showtime.movie?.title || 'N/A'}<br />
                          Theater: {showtime.theater?.name || 'N/A'}<br />
                          Start Time: {showtime.startTime}
                        </p>
                      </label>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {data.selectedShowtime && data.currentUserId && (
            <div>
              <h3>Selected Showtime Details:</h3>
              <p>
                Movie: {data.selectedShowtime.movie?.title || 'N/A'}<br />
                Theater: {data.selectedShowtime.theater?.name || 'N/A'}<br />
                Start Time: {data.selectedShowtime.startTime}
              </p>
              <h3>Booking Details:</h3>
              {data.bookingSuccess ? (
                <p style={{ color: 'green' }}>Booking successful!</p>
              ) : (
                <div>
                  <p>
                    Movie: {data.selectedShowtime.movie?.title || 'N/A'}<br />
                    Theater: {data.selectedShowtime.theater?.name || 'N/A'}<br />
                    Start Time: {data.selectedShowtime.startTime}
                  </p>
                  <h4>Select a Seat:</h4>
                  <Grid container spacing={2}>
                    {generateSeatOptions().map((seatOption) => (
                      <Grid item key={seatOption}>
                        <Button
                          variant={seatOption === data.selectedSeat ? 'contained' : 'outlined'}
                          onClick={() => handleSeatSelect(seatOption)}
                        >
                          {seatOption}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                  <Button
                    type="submit" 
                    variant="contained"
                    color="primary"
                    disabled={!data.selectedSeat}
                  >
                    Book Now
                  </Button>
                </div>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default WelcomeUser;
