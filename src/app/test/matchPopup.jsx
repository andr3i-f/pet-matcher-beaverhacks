import React from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

export default function MatchCelebration({ petName }) {
  return (
    <div>
      <Confetti />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="popup"
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '1.5rem',
          textAlign: 'center',
          maxWidth: '400px',
          margin: '2rem auto',
          boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          🎉 You matched with {petName}!
        </h1>
        <h2 style={{ fontWeight: 'normal', color: '#555' }}>
          Congratulations on finding your perfect match!
        </h2>
        <p style={{ marginTop: '1rem', color: '#888' }}>
          {petName} is at Oregon Shelter and can’t wait to meet you!
        </p>
      </motion.div>
    </div>
  );
}
