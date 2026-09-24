import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <span className="badge badge-purple">ABOUT ME</span>
          <h2 className="section-heading">I'm passionate about creating digital solutions</h2>
          <p className="section-description">
            Computer Science and Engineering student and Full-Stack Software Development trainee with experience in JavaScript, React.js, Next.js, and foundational programming in Python, C, and C++. Passionate about building responsive, practical web applications and mastering modern full-stack technologies.
          </p>
          <a href="#projects" className="btn btn-outline">
            View My Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><i className="fa-solid fa-graduation-cap"></i></div>
            <h3 className="stat-value">3.87</h3>
            <p className="stat-label">University CGPA</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fa-solid fa-code"></i></div>
            <h3 className="stat-value">4</h3>
            <p className="stat-label">Featured Projects</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fa-solid fa-layer-group"></i></div>
            <h3 className="stat-value">10+</h3>
            <p className="stat-label">Technologies</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fa-solid fa-certificate"></i></div>
            <h3 className="stat-value">4</h3>
            <p className="stat-label">Certifications & Training</p>
          </div>
        </div>
      </div>
    </section>
  );
}
