import React from 'react';
import './CardContent.css';
import internationalTaxationImg from '../img/internationalTaxation.png';

const CardContent = () => {
  return (
    <div className="card-page-container">
      <div className="split-screen-wrapper">
        {/* Left Content Section */}
        <div className="content-section">
          <h1 className="gradient-heading">
            Global Tax Solutions
          </h1>
          
          <p className="content-paragraph">
            Navigating the complex world of international taxation requires 
            expertise in bilateral agreements, cross-border regulations, 
            and strategic tax planning. Our solutions ensure compliance 
            while optimizing your global tax position.
          </p>
          
          <div className="button-group">
            <button className="primary-btn">
              Explore Solutions
            </button>
            
            <button className="secondary-btn">
              Contact Experts
            </button>
          </div>
          
          <div className="decorative-element">
            <div className="animated-diamond"></div>
            <span className="specialist-text">
              Tax Treaty Specialists
            </span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="image-section">
          <div className="image-glow"></div>
          <img 
            src={internationalTaxationImg} 
            alt="International Taxation" 
            className="feature-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContent;