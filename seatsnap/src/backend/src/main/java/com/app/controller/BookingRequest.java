package com.app.controller;

import java.time.LocalDateTime;

public class BookingRequest {
    private Long showtimeId;
    private Long userId;
    private LocalDateTime bookingDatetime;
    private String seatNo;

    
    public BookingRequest() {
    }

    public BookingRequest(Long showtimeId, Long userId, LocalDateTime bookingDatetime, String seatNo) {
        this.showtimeId = showtimeId;
        this.userId = userId;
        this.bookingDatetime = bookingDatetime;
        this.seatNo = seatNo;
    }

   
    public Long getShowtimeId() {
        return showtimeId;
    }

    public void setShowtimeId(Long showtimeId) {
        this.showtimeId = showtimeId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getBookingDatetime() {
        return bookingDatetime;
    }

    public void setBookingDatetime(LocalDateTime bookingDatetime) {
        this.bookingDatetime = bookingDatetime;
    }

    public String getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(String seatNo) {
        this.seatNo = seatNo;
    }

    
    @Override
    public String toString() {
        return "BookingRequest{" +
                "showtimeId=" + showtimeId +
                ", userId=" + userId +
                ", bookingDatetime=" + bookingDatetime +
                ", seatNo='" + seatNo + '\'' +
                '}';
    }
}
