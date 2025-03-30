import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Icons } from './Icons/Icons';

const Sidebar = () => {
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
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <div className="user-info">
          <h2 className="user-name">Muluken Gelgel</h2>
          <div className="user-title">SharePoint Developer</div>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#profile" className={`sidebar-link ${activeSection === 'profile' ? 'active' : ''}`}>
            <span className="sidebar-icon"><Icons.Profile /></span> Profile
          </a>
          <a href="#skills" className={`sidebar-link ${activeSection === 'skills' ? 'active' : ''}`}>
            <span className="sidebar-icon"><Icons.Skills /></span> Skills
          </a>
          <a href="#experience" className={`sidebar-link ${activeSection === 'experience' ? 'active' : ''}`}>
            <span className="sidebar-icon"><Icons.Experience /></span> Experience
          </a>
          <a href="#education" className={`sidebar-link ${activeSection === 'education' ? 'active' : ''}`}>
            <span className="sidebar-icon"><Icons.Education /></span> Education
          </a>
          <a href="#repositories" className={`sidebar-link ${activeSection === 'repositories' ? 'active' : ''}`}>
            <span className="sidebar-icon"><Icons.Projects /></span> Projects
          </a>
          <a href="#contact" className={`sidebar-link ${activeSection === 'contact' ? 'active' : ''}`}>
            <span className="sidebar-icon"><Icons.Contact /></span> Contact
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
