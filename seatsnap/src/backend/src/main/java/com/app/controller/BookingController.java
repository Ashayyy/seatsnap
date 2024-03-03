package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Booking;
import com.app.entities.Showtime;
import com.app.entities.User;
import com.app.service.BookingService;
import com.app.service.ShowtimeService;
import com.app.service.UserService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController extends BaseController{

    private final BookingService bookingService;
    
    private final ShowtimeService showtimeService;
    private final UserService userService;
    

    @Autowired
    public BookingController(BookingService bookingService, ShowtimeService showtimeService, UserService userService) {
        this.bookingService = bookingService;
        this.showtimeService = showtimeService;
        this.userService = userService;
    }

	/*
	 * @Autowired public BookingController(BookingService bookingService) {
	 * this.bookingService = bookingService; }
	 */
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        if (booking != null) {
            return new ResponseEntity<>(booking, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

	/*
	 * @PostMapping public ResponseEntity<Booking> createBooking(@RequestBody
	 * Booking booking) { Booking createdBooking =
	 * bookingService.createBooking(booking); return new
	 * ResponseEntity<>(createdBooking, HttpStatus.CREATED); }
	 */
    
    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest bookingRequest) {
        // Check if the seat number is available for the specified showtime
        Showtime showtime = showtimeService.getShowtimeById(bookingRequest.getShowtimeId());
        String seatNo = bookingRequest.getSeatNo();

        if (!bookingService.isSeatAvailable(showtime, seatNo)) {
            return ResponseEntity.badRequest().body(null); // Replace null with an appropriate error response
        }

        // Create a new Booking object
        Booking booking = new Booking();

        // Set properties from the request
        booking.setBookingDateTime(bookingRequest.getBookingDatetime());
        booking.setSeatNo(seatNo);

        // Assuming valid instances of User based on the user ID from the request
        User user = userService.getUserById(bookingRequest.getUserId());

        // Set the Showtime and User references for the booking
        booking.setShowtime(showtime);
        booking.setUser(user);

        // Save the booking
        Booking createdBooking = bookingService.createBooking(booking);
        
        if (createdBooking != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdBooking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }





    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        Booking updatedBooking = bookingService.updateBooking(id, booking);
        if (updatedBooking != null) {
            return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
