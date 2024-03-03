package com.app.service;

import java.util.List;

import com.app.entities.Booking;
import com.app.entities.Showtime;


public interface BookingService {
    List<Booking> getAllBookings();
    Booking getBookingById(Long id);
    Booking createBooking(Booking booking);
    Booking updateBooking(Long id, Booking booking);
    void deleteBooking(Long id);
    boolean isSeatAvailable(Showtime showtime, String seatNo);
}
