import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header text-center">
          <span className="badge badge-purple">FEATURED PROJECTS</span>
          <h2 className="section-heading">Some of My Recent Work</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <span className="project-number">01</span>
            </div>
            <div className="project-preview preview-ecommerce">
              <div className="preview-mockup">
                <div className="mock-sidebar"></div>
                <div className="mock-content">
                  <div className="mock-chart"></div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-tech-tag">React.js • Tailwind CSS • React Router</span>
              <h3 className="project-title">EthioMarket</h3>
              <p className="project-description">
                Built a multi-page e-commerce interface with product listings, cart state management, and client-side routing using React and React Router.
              </p>
              <a href="https://ethio-market-nine.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <span className="project-number">02</span>
            </div>
            <div className="project-preview preview-budget">
              <div className="mock-budget">
                <div className="mock-budget-header">
                  <div className="mock-budget-badge"></div>
                  <div className="mock-budget-line"></div>
                </div>
                <div className="mock-chart-line">
                  <div className="mock-bar" style={{ height: "40%" }}></div>
                  <div className="mock-bar" style={{ height: "75%" }}></div>
                  <div className="mock-bar" style={{ height: "55%" }}></div>
                  <div className="mock-bar" style={{ height: "90%" }}></div>
                  <div className="mock-bar" style={{ height: "65%" }}></div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-tech-tag">React.js • Live Currency API • Local Storage</span>
              <h3 className="project-title">BirrBudget</h3>
              <p className="project-description">
                Developed a personal budgeting tool that integrates a live external currency/exchange API to display real-time conversion data with Local Storage persistence.
              </p>
              <a href="https://birr-badget.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <span className="project-number">03</span>
            </div>
            <div className="project-preview preview-countries">
              <div className="mock-country">
                <div className="mock-search-bar"></div>
                <div className="mock-country-grid">
                  <div className="mock-country-card">
                    <div className="mock-flag"></div>
                    <div className="mock-text"></div>
                  </div>
                  <div className="mock-country-card">
                    <div className="mock-flag"></div>
                    <div className="mock-text"></div>
                  </div>
                  <div className="mock-country-card">
                    <div className="mock-flag"></div>
                    <div className="mock-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-tech-tag">React.js • REST Countries API</span>
              <h3 className="project-title">Country Facts Explorer</h3>
              <p className="project-description">
                Consumed the REST Countries API to fetch and render searchable, filterable country data across dynamic React components with loading states and resilient error handling.
              </p>
              <a href="https://country-facts-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <span className="project-number">04</span>
            </div>
            <div className="project-preview preview-restaurant">
              <div className="mock-restaurant">
                <div className="mock-hero-banner"></div>
                <div className="mock-food-cards">
                  <div className="mock-food-item">
                    <div className="mock-food-img"></div>
                  </div>
                  <div className="mock-food-item">
                    <div className="mock-food-img"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-tech-tag">Next.js • Tailwind CSS</span>
              <h3 className="project-title">Addis Eats</h3>
              <p className="project-description">
                Building a restaurant browsing application with Next.js and Tailwind CSS, focused on responsive, utility-first UI design and smooth browsing experience.
              </p>
              <a href="https://addis-eats-psi.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}
