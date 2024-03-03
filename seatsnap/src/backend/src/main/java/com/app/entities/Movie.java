package com.app.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;


	@Entity
	public class Movie {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotBlank(message = "Title is required")
	    @Size(max = 255, message = "Title cannot exceed 255 characters")
	    private String title;

	    @NotBlank(message = "Genre is required")
	    @Size(max = 255, message = "Genre cannot exceed 255 characters")
	    private String genre;

	    @NotBlank(message = "Director is required")
	    @Size(max = 255, message = "Director cannot exceed 255 characters")
	    private String director;

	    @Positive(message = "Duration must be a positive integer")
	    private int durationMinutes;

	    @NotNull(message = "Release date is required")
	    private LocalDate releaseDate;

	    @Size(max = 1024, message = "Description cannot exceed 1024 characters")
	    private String description;

	    @Size(max = 255, message = "Poster image URL cannot exceed 255 characters")
	    private String posterImageUrl;

	    @OneToMany(mappedBy = "movie", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	    @JsonIgnore
	    private List<Showtime> showtimes;

    

    public Movie() {
    }
    
    public Movie(Long id) {
        this.id = id;
    }

    public Movie(String title, String genre, String director, int durationMinutes, LocalDate releaseDate, String description, String posterImageUrl) {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.durationMinutes = durationMinutes;
        this.releaseDate = releaseDate;
        this.description = description;
        this.posterImageUrl = posterImageUrl;
    }

   
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(int durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPosterImageUrl() {
        return posterImageUrl;
    }

    public void setPosterImageUrl(String posterImageUrl) {
        this.posterImageUrl = posterImageUrl;
    }

    public List<Showtime> getShowtimes() {
        return showtimes;
    }

    public void setShowtimes(List<Showtime> showtimes) {
        this.showtimes = showtimes;
    }

    

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", genre='" + genre + '\'' +
                ", director='" + director + '\'' +
                ", durationMinutes=" + durationMinutes +
                ", releaseDate=" + releaseDate +
                ", description='" + description + '\'' +
                ", posterImageUrl='" + posterImageUrl + '\'' +
               
                '}';
    }
}
