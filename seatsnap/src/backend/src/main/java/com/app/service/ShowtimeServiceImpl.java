package com.app.service;

import com.app.entities.Showtime;
import com.app.repository.ShowtimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowtimeServiceImpl implements ShowtimeService {

    private final ShowtimeRepository showtimeRepository;

    @Autowired
    public ShowtimeServiceImpl(ShowtimeRepository showtimeRepository) {
        this.showtimeRepository = showtimeRepository;
    }

    @Override
    public List<Showtime> getAllShowtimes() {
        return showtimeRepository.findAll();
    }

    @Override
    public Showtime getShowtimeById(Long id) {
        return showtimeRepository.findById(id).orElse(null);
    }

    @Override
    public Showtime createShowtime(Showtime showtime) {
        return showtimeRepository.save(showtime);
    }

    @Override
    public Showtime updateShowtime(Long id, Showtime showtime) {
        if (showtimeRepository.existsById(id)) {
            showtime.setId(id);
            return showtimeRepository.save(showtime);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteShowtime(Long id) {
        showtimeRepository.deleteById(id);
    }
}
