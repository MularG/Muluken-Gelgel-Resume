import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      degree: 'B.S., Computer Science',
      institution: 'Wollega University',
      period: '2009 - 2013',
      description: 'Focused on software development and database management systems. Participated in various programming competitions.'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified Professional Developer (MCPD)',
      institution: 'Microsoft',
      period: 'April 2018',
      description: 'Certification validating expertise in developing complex solutions using Microsoft technologies.'
    },
    {
      name: 'Microsoft Certified Solution Developer (MCSD)',
      institution: 'Microsoft',
      period: 'July 2019',
      description: 'Certification demonstrating proficiency in designing and building application solutions.'
    }
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="github-card">
        <div className="education-list">
          {educations.map((edu, index) => (
            <div className="education-item" key={index}>
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="period">{edu.period}</span>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
        
        <h3 className="certifications-title">Certifications</h3>
        <div className="education-list">
          {certifications.map((cert, index) => (
            <div className="education-item" key={index}>
              <h3 className="education-degree">{cert.name}</h3>
              <div className="education-meta">
                <span className="institution">{cert.institution}</span>
                <span className="period">{cert.period}</span>
              </div>
              <p className="education-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
