'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function MatchCelebration({ petName = "Your new friend", image = "/images/pet-placeholder.png" }) {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true); // start fading out

      // wait for fade animation to finish (e.g., 1s), then remove it
      setTimeout(() => setVisible(false), 1000);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        position: 'relative',
      }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: fadingOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            <Confetti 
              width={dimensions.width} 
              height={dimensions.height} 
              recycle={true} 
              numberOfPieces={200}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          background: 'rgba(255, 240, 245, 0.95)',
          padding: '2rem',
          borderRadius: '2rem',
          textAlign: 'center',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          fontFamily: `'Segoe UI', 'Comic Sans MS', cursive`,
          backdropFilter: 'blur(6px)',
          zIndex: 2,
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: '#d6336c' }}>
           You matched with <strong>{petName}</strong>!
        </h1>

        <img
          src={image || "/images/pet-placeholder.png"}
          alt={petName}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "/images/pet-placeholder.png";
          }}
          style={{
            borderRadius: '1rem',
            width: '100%',
            maxHeight: '220px',
            objectFit: 'cover',
            marginBottom: '1rem',
            border: '3px solid #ffc8dd',
          }}
        />

        <h2 style={{ fontWeight: 'normal', color: '#333', marginBottom: '0.5rem' }}>
           Your perfect match is waiting!
        </h2>
        <p style={{ color: '#555', fontSize: '1rem' }}>
          {petName} is at <strong>Oregon Shelter</strong> and can't wait to meet you! 
        </p>
      </motion.div>
    </div>
  );
}
