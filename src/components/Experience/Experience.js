import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'SharePoint Developer',
      company: 'ITC, SSA',
      location: 'Baltimore, USA',
      period: 'April 2024 - Present',
      description: [
        'Developed and implemented JavaScript-based web forms to replace InfoPath Forms, enhancing user experience in SharePoint',
        'Built and delivered applications efficiently using PowerApps, Power Automate, and Power BI, significantly improving business processes',
        'Customized the company intranet, including creating and managing various sites and incorporating modern web parts for real-time updates',
        'Designed and implemented workflows with Nintex Workflows to automate a range of complex business operations',
        'Integrated Tableau dashboards with SharePoint, improving data analysis and reporting, and provided training to ensure effective usage'
      ]
    },
    {
      title: 'SharePoint Developer',
      company: 'Booz Allen Hamilton, FAA TRECs',
      location: 'Remote',
      period: 'June 2023 - March 2024',
      description: [
        'Replaced InfoPath Form with JavaScript-based custom forms to facilitate web-based data entry for corporate users',
        'Developed applications using PowerApps, Power Automate, and Power BI to deliver timely solutions and improve business efficiency',
        'Customized and managed the company intranet, including creating hub sites, department sites, and updating employee portals',
        'Automated business processes by designing and troubleshooting workflows with Nintex Workflows 2013',
        'Implemented and integrated Tableau dashboards within SharePoint for advanced data analysis and reporting'
      ]
    },
    {
      title: 'SharePoint Developer',
      company: 'Terracon, STS',
      location: 'Remote',
      period: 'January 2018 - June 2023',
      description: [
        'Utilized InfoPath Form services to convert forms into web-based forms to facilitate data entry for corporate users',
        'Developed dynamic workflows with SharePoint Designer and JavaScript to automate business processes, boosting efficiency',
        'Designed and applied custom branding to SharePoint Sites using Bootstrap, CSS5, and HTML5, improving site aesthetics',
        'Implemented Agile with scrums and sprints, meeting tight deadlines and adapting to changes efficiently',
        'Created and managed SharePoint permissions, security, and site collections, ensuring proper access control'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="github-card">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
