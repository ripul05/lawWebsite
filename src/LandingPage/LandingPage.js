import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStartedClick }) => {
  return (
    <section className="landing">
      <nav className="navbar">
        <h1>Lex & Justice</h1>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="landing-content">
        <h1>Justice. Honor. Law.</h1>
        <p>Explore the guiding principles of justice and the legacy of legal integrity that shapes society.</p>
        <button className="cta" onClick={onGetStartedClick}>Get Started</button>
      </div>
    </section>
  );
};

export default LandingPage;