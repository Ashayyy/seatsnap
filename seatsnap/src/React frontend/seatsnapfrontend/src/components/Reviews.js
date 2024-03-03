// Reviews.js

import React from 'react';
import moviePoster from '../assets/dummy/gogvol3.jpg';
import moviePoster2 from '../assets/dummy/2.webp';
import moviePoster3 from '../assets/dummy/3.avif';
import moviePoster4 from '../assets/dummy/4.webp';
import Navbar from './Navbar';

const MovieReview = ({ title, poster, summary }) => (
  <div className="col-md-6 mb-4">
    <figure className="movie-poster">
      <img src={poster} alt={`Poster for ${title}`} style={{ maxWidth: '100%', height: 'auto', width: '80%' }} />
    </figure>
    <div className="movie-info">
      <h2 className="movie-title">{title}</h2>
      <div className="movie-summary">
        <p>{summary}</p>
      </div>
    </div>
  </div>
);

function Reviews() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="page">
            {/* First Row */}
            <div className="row">
              <MovieReview
                title="Guardians of The Galaxy vol 3"
                poster={moviePoster}
                summary="Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them."
              />
              <MovieReview
                title="Avengers Endgame"
                poster={moviePoster2}
                summary="The overwhelming devastation caused by the mad Titan Thanos has left what remains of the Avengers reeling. For a while, all hope seems lost... until an opportunity to reverse the damage is presented. Now, the team must assemble once more and do whatever it takes to restore the universe and bring those they lost back."
              />
            </div>
            {/* Second Row */}
            <div className="row">
              <MovieReview
                title="Ironman"
                poster={moviePoster3}
                summary="Tony Stark is charismatic and eccentric, he is also very proud, but also very altruist and heroic. He did not have a good childhood, and this affects how he acts. Stark is very smart, and a very talented inventor. His technology is always very advanced, and Iron Man is his greatest piece of work."
              />
              <MovieReview
                title="Doctor Strange"
                poster={moviePoster4}
                summary="A Master of the Mystic Arts, Doctor Strange has phenomenally powerful magical abilities that enable him to skillfully conjure myriad spells. Strange has been able to use his spells to bind opponents and create complex shields and barriers, among many other uses for both defense and attack."
              />
            </div>
            {/* Add more MovieReview components for other movies */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reviews;
