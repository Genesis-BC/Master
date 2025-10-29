import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        delay: Math.random() * 10
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="animated-background">
      {/* Background Video */}
      <div className="video-background">
        <div className="video-overlay"></div>
        <div className="video-placeholder">
          {/* This would be your background video */}
          <div className="video-text">Background Video Placeholder</div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.speed + 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Words */}
      <div className="floating-words">
        <div className="word word-1">GENESIS</div>
        <div className="word word-2">VOICES</div>
        <div className="word word-3">STORY</div>
        <div className="word word-4">DREAMS</div>
        <div className="word word-5">HOPE</div>
        <div className="word word-6">FUTURE</div>
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape triangle"></div>
        <div className="shape circle"></div>
        <div className="shape square"></div>
        <div className="shape hexagon"></div>
      </div>

      {/* Fire Effects */}
      <div className="fire-effects">
        <div className="fire fire-1"></div>
        <div className="fire fire-2"></div>
        <div className="fire fire-3"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;

