import React from 'react';
import './Repositories.css';

const Repositories = () => {
  const projects = [
    {
      title: 'SharePoint Modern Intranet',
      description: 'Designed and implemented a modern intranet portal with hub sites and custom SPFx web parts, improving employee engagement and communication.',
      technologies: ['SharePoint Online', 'SPFx', 'React', 'TypeScript', 'Microsoft Graph API'],
      isPublic: true
    },
    {
      title: 'InfoPath to PowerApps Migration',
      description: 'Converted legacy InfoPath forms to modern PowerApps solutions with Power Automate workflows, reducing processing time by 40% and improving user experience.',
      technologies: ['PowerApps', 'Power Automate', 'SharePoint', 'JavaScript', 'REST API'],
      isPublic: true
    },
    {
      title: 'SharePoint Document Management System',
      description: 'Built a comprehensive document management system with advanced metadata, approval workflows, and version control using SharePoint and Nintex.',
      technologies: ['SharePoint', 'Nintex Workflows', 'JavaScript', 'jQuery', 'PnP PowerShell'],
      isPublic: false
    },
    {
      title: 'SharePoint Analytics Dashboard',
      description: 'Developed an integrated analytics solution that combines SharePoint data with Tableau visualizations to provide real-time business intelligence.',
      technologies: ['SharePoint', 'Tableau', 'Power BI', 'SQL Server', 'REST API'],
      isPublic: true
    }
  ];

  return (
    <section id="repositories" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="github-card">
        <div className="repo-filter">
          <input type="text" placeholder="Find a project..." className="repo-search" disabled />
          <div className="repo-filter-buttons">
            <button className="repo-filter-btn active">All</button>
            <button className="repo-filter-btn">Public</button>
            <button className="repo-filter-btn">Private</button>
          </div>
        </div>
        <div className="repo-list">
          {projects.map((project, index) => (
            <div className="repo-item" key={index}>
              <h3 className="repo-title">
                {project.title}
                <span className={`repo-visibility ${project.isPublic ? 'public' : 'private'}`}>
                  {project.isPublic ? 'Public' : 'Private'}
                </span>
              </h3>
              <p className="repo-description">{project.description}</p>
              <div className="repo-tags">
                {project.technologies.map((tech, i) => (
                  <span className="tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repositories;
