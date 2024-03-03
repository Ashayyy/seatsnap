package com.app.service;

import com.app.entities.Showtime;
import java.util.List;

public interface ShowtimeService {
    List<Showtime> getAllShowtimes();
    Showtime getShowtimeById(Long id);
    Showtime createShowtime(Showtime showtime);
    Showtime updateShowtime(Long id, Showtime showtime);
    void deleteShowtime(Long id);
}
