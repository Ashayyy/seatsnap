package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private LocalDateTime bookingDateTime;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "showtime_id")
    @JsonIgnoreProperties("bookings")
    private Showtime showtime;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties("bookings")
    private User user;

    @NotNull
    @Length(min = 1, max = 300) // Define seat number length constraints
    private String seatNo;

   
    public Booking() {
    }

    public Booking(LocalDateTime bookingDateTime, String seatNo) {
        this.bookingDateTime = bookingDateTime;
        this.seatNo = seatNo;
    }

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public Showtime getShowtime() {
        return showtime;
    }

    public void setShowtime(Showtime showtime) {
        this.showtime = showtime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(String seatNo) {
        this.seatNo = seatNo;
    }

    
    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", bookingDateTime=" + bookingDateTime +
                ", seatNo='" + seatNo + '\'' +
                '}';
    }
}
