import React, { useState } from 'react';
import './Contact.css';
import { Icons } from '../Icons/Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const mailtoLink = `mailto:mulukengelgel@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Opening your email client. Thank you for your message!'
    });
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="github-card">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon"><Icons.Location /></span>
              <div>
                <h3>Location</h3>
                <p>Baltimore, USA</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Icons.Email /></span>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:mulukengelgel@gmail.com">mulukengelgel@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Icons.Phone /></span>
              <div>
                <h3>Phone</h3>
                <p>202-294-7872</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Icons.Language /></span>
              <div>
                <h3>Languages</h3>
                <p>English, Amharic</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {formStatus.submitted ? (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button> 
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
