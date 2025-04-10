import React, { useEffect } from 'react';
import './StartBusiness.css';
import whiteBoardAnnimation from "../img/whiteBoardAnnimation.mp4";

const StartBusiness = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="start-business-container">
      <div className="decorative-background">
        {[...Array(6)].map((_, i) => <div key={i} className="glowing-dot" />)}
      </div>
      
      <div className="video-section animate-on-scroll">
        <div className="video-card">
          <div className="gradient-border">
            <video autoPlay muted loop playsInline>
              <source src={whiteBoardAnnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="text-section animate-on-scroll">
        <h1 className="gradient-text">Understanding International Business</h1>
        <p className="fade-in">International business involves the exchange of goods, services, technology, and capital across national borders...</p>
        <p className="fade-in">Companies engaging in international business must navigate diverse regulatory environments...</p>
        <p className="fade-in">This video provides a foundational overview of the key concepts, challenges...</p>
      </div>
    </div>
  );
};

export default StartBusiness;