package com.app.service;

import com.app.entities.Theater;
import java.util.List;

public interface TheaterService {
    List<Theater> getAllTheaters();
    Theater getTheaterById(Long id);
    Theater createTheater(Theater theater);
    Theater updateTheater(Long id, Theater theater);
    void deleteTheater(Long id);
}
