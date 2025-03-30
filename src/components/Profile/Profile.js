import React from 'react';
import './Profile.css';
import { Icons } from '../Icons/Icons';

const Profile = () => {
  return (
    <section id="profile" className="section">
      <h2 className="section-title">Profile</h2>
      <div className="github-card">
        <p className="profile-bio">
          Experienced SharePoint Developer with over 10 years of expertise in implementing and customizing SharePoint solutions. 
          Skilled in JavaScript, React, .NET, and SharePoint development with a focus on enhancing user experiences and 
          automating business processes. Proficient in developing custom web parts, forms, and workflows for SharePoint Online 
          and On-Premises environments.
        </p>
        
        <div className="profile-tags">
          <span className="tag">Public Trust Clearance</span>
          <span className="tag tag-green">MCPD</span>
          <span className="tag tag-green">MCSD</span>
        </div>
        
        <div className="profile-meta">
          <div className="meta-item">
            <span className="meta-icon"><Icons.Location /></span>
            <span>Baltimore, USA</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon"><Icons.Email /></span>
            <a href="mailto:mulukengelgel@gmail.com">mulukengelgel@gmail.com</a>
          </div>
          <div className="meta-item">
            <span className="meta-icon"><Icons.Phone /></span>
            <span>202-294-7872</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon"><Icons.Language /></span>
            <span>English, Amharic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
