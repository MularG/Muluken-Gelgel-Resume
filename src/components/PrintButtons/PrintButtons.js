import React from 'react';
import './PrintButtons.css';

const PrintButtons = () => {
  // Function to handle printing/saving as PDF
  const handlePrint = () => {
    window.print();
  };

  // Function to generate and download Word document
  const handleWordDownload = () => {
    // Create a simple text version of the resume
    const content = document.querySelector('.main-content');
    let text = '';
    
    // Extract headings and paragraphs
    const headings = content.querySelectorAll('h2');
    headings.forEach(heading => {
      text += heading.textContent + '\n\n';
      let nextElement = heading.nextElementSibling;
      while (nextElement && nextElement.tagName !== 'H2') {
        if (nextElement.textContent && nextElement.textContent.trim()) {
          text += nextElement.textContent.trim() + '\n\n';
        }
        nextElement = nextElement.nextElementSibling;
      }
    });
    
    // Create a blob and download link
    const blob = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="print-buttons">
      <button className="print-btn pdf-btn" onClick={handlePrint}>
        <span className="btn-icon">??</span> PDF
      </button>
      <button className="print-btn word-btn" onClick={handleWordDownload}>
        <span className="btn-icon">??</span> Word
      </button>
    </div>
  );
};

export default PrintButtons;
