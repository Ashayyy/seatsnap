package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;


    @Entity
    public class Theater {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank(message = "Name is required")
        @Size(max = 255, message = "Name cannot exceed 255 characters")
        private String name;

        @NotBlank(message = "Location is required")
        @Size(max = 255, message = "Location cannot exceed 255 characters")
        private String location;

        @Positive(message = "Capacity must be a positive integer")
        private int capacity;

        @Size(max = 1024, message = "Facilities cannot exceed 1024 characters")
        private String facilities;

        @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
        @JsonIgnore
        private List<Showtime> showtimes;

    
    public Theater() {
    }
    
    public Theater(Long id) {
        this.id = id;
    }


    public Theater(String name, String location, int capacity, String facilities) {
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.facilities = facilities;
    }

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getFacilities() {
        return facilities;
    }

    public void setFacilities(String facilities) {
        this.facilities = facilities;
    }

   
    public List<Showtime> getShowtimes() {
        return showtimes;
    }

    public void setShowtimes(List<Showtime> showtimes) {
        this.showtimes = showtimes;
    }

    
    @Override
    public String toString() {
        return "Theater{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                ", capacity=" + capacity +
                ", facilities='" + facilities + '\'' +
                '}';
    }
}
