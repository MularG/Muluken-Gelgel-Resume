import React from 'react';
import './MainContent.css';
import Profile from '../Profile/Profile';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Repositories from '../Repositories/Repositories';
import Contact from '../Contact/Contact';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-section">
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Repositories />
        <Contact />
      </div>
    </div>
  );
};

export default MainContent;
