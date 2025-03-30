import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'jQuery', level: 85 },
    { name: 'Bootstrap', level: 80 },
  ];

  const backendSkills = [
    { name: 'SharePoint', level: 95 },
    { name: 'PowerApps', level: 85 },
    { name: 'Power Automate', level: 80 },
    { name: 'C# / .NET', level: 75 },
    { name: 'SQL Server', level: 70 },
  ];

  const otherSkills = [
    { name: 'SharePoint SPFx', level: 90 },
    { name: 'Nintex Workflows', level: 85 },
    { name: 'PowerBI', level: 80 },
    { name: 'Tableau', level: 75 },
    { name: 'Agile', level: 90 },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div className="skill" key={index}>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="github-card">
        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend</h3>
            {renderSkills(frontendSkills)}
          </div>
          <div className="skills-category">
            <h3>SharePoint & Backend</h3>
            {renderSkills(backendSkills)}
          </div>
          <div className="skills-category">
            <h3>Specialized Skills</h3>
            {renderSkills(otherSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
