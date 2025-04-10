import React from 'react';
import { motion } from 'framer-motion';
import './ImmigrationProcess.css';
import internationalImg from "../img/international.png";
import pointingCharacter from "../img/pointing.webp"; // Add a cute/clean SVG or PNG of a character pointing

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
      <motion.h1
        className="law-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        International Law Process 🌐
      </motion.h1>

      <div className="law-flow">
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
            <div className="icon">{step.icon}</div>
            <h3>{step.label}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="arrow">➤</div>}
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="cta-text">Want to start a business abroad?</h2>
        <div className="cta-container">
          <img src={pointingCharacter} alt="Pointer" className="pointer-character" />
          <motion.a
            href="/start-business"
            className="cta-button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Begin 🚀
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
