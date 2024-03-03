package com.app.service;

import com.app.entities.Theater;
import com.app.repository.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterServiceImpl implements TheaterService {

    private final TheaterRepository theaterRepository;

    @Autowired
    public TheaterServiceImpl(TheaterRepository theaterRepository) {
        this.theaterRepository = theaterRepository;
    }

    @Override
    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    @Override
    public Theater getTheaterById(Long id) {
        return theaterRepository.findById(id).orElse(null);
    }

    @Override
    public Theater createTheater(Theater theater) {
        return theaterRepository.save(theater);
    }

    @Override
    public Theater updateTheater(Long id, Theater theater) {
        if (theaterRepository.existsById(id)) {
            theater.setId(id);
            return theaterRepository.save(theater);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteTheater(Long id) {
        theaterRepository.deleteById(id);
    }
}
