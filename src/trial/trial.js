import React from 'react';
import { motion } from 'framer-motion';
import './ImmigrationProcess.css';
import internationalImg from "../img/international.png";
import pointingCharacter from "../img/pointing.webp"; // Add a cute/clean SVG or PNG of a character pointing\
import { Link } from 'react-router-dom';


const steps = [
  {
    icon: '🌍',
    label: 'Global Issue',
    description: 'Conflict, treaty, or human rights issue arises.',
  },
  {
    icon: '🇺🇳',
    label: 'UN Involvement',
    description: 'United Nations or international body steps in.',
  },
  {
    icon: '🏛️',
    label: 'ICJ / ICC',
    description: 'Case proceeds to International Court of Justice / Criminal Court.',
  },
  {
    icon: '📜',
    label: 'Legal Review',
    description: 'Laws, treaties, and evidence are reviewed.',
  },
  {
    icon: '⚖️',
    label: 'Judgement',
    description: 'Court delivers binding verdict or advisory opinion.',
  },
];

export default function InternationalLawFlow() {
  return (
    <div className="law-flow-container">
      {/* Decorative background elements */}
      <div className="decorative-bg">
        <div className="radial-gradient"></div>
        <div className="floating-dots"></div>
      </div>

      <motion.h1
        className="law-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        International Law Process 
      </motion.h1>

      <div className="law-flow-wrapper">
        <div className="timeline-line"></div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="law-step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.6)',
            }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <div className={`step-connector ${index % 2 === 0 ? 'left' : 'right'}`}></div>
            <div className="icon-wrapper">
              <div className="icon-glow"></div>
              <div className="icon">{step.icon}</div>
            </div>
            <h3>{step.label}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Enhanced CTA Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-text">Ready to Start Your International Business?</h2>
            <p className="cta-subtext">Navigate global markets with confidence</p>
            <div className="cta-container">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link to="/start-business" className="cta-button">
                  Begin Journey 🚀
                </Link>
              </motion.div>
              <img 
                src={pointingCharacter} 
                alt="Pointer" 
                className="pointer-character" 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}