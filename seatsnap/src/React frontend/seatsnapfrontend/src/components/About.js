// Import necessary libraries and components
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';
import logo from '../assets/images/logo.png';
import moviePoster from '../assets/dummy/gogvol3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

function AboutPage() {
  // Sample team members data
  const teamMembers = [
    {
      name: 'Ashay',
      role: 'Founder & Developer',
      bio: 'Passionate about creating seamless user experiences and turning ideas into reality.',
    },
    {
      name: 'YourName',
      role: 'Backend Developer',
      bio: 'Master of the backend realm, conjuring code spells to bring data to life and keep the digital universe in balance.',
    },
  ];

  return (
    <div id="site-content">
      <Navbar/>
      

      <main className="main-content" style={{ backgroundColor: '#f7f7f7', padding: '20px 0' }}>
        <div className="container">
          <div className="page">
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>About Us</span>
            </div>
            <div className="content">
              <h2 className="section-title">Meet the Magical Minds Behind Seatsnap</h2>
              <div className="team-members">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-member">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default AboutPage;
