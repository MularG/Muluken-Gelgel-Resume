import React, { useState, useEffect } from 'react';
import './Header.css';
import { Icons } from '../Icons/Icons';

const Header = () => {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100 && 
            window.pageYOffset < sectionTop + sectionHeight - 100) {
          current = section.getAttribute('id');
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <header className="github-header">
      <div className="header-container">
        <div className="logo">
          <svg height="32" viewBox="0 0 16 16" width="32" fill="#24292f">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </div>
        <nav className="navigation">
          <a href="#profile" className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}>
            <span className="nav-icon"><Icons.Profile /></span> Overview
          </a>
          <a href="#repositories" className={`nav-item ${activeSection === 'repositories' ? 'active' : ''}`}>
            <span className="nav-icon"><Icons.Projects /></span> Projects
          </a>
          <a href="#skills" className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
            <span className="nav-icon"><Icons.Skills /></span> Skills
          </a>
          <a href="#experience" className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}>
            <span className="nav-icon"><Icons.Experience /></span> Experience
          </a>
          <a href="#education" className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}>
            <span className="nav-icon"><Icons.Education /></span> Education
          </a>
          <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <span className="nav-icon"><Icons.Contact /></span> Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
