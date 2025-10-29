import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const jumpVariants = {
    hover: {
      y: -20,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1
      }
    }
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const scrollToCarousel = () => {
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      window.scrollTo({
        top: heroElement.offsetHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero">
      {/* Interactive Cursor Follower */}
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating Elements */}
      <div className="floating-elements">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="floating-element"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.from("GENESIS").map((letter, index) => (
            <motion.span
              key={index}
              className="hero-letter"
              variants={letterVariants}
              whileHover={jumpVariants.hover}
              style={{
                display: 'inline-block',
                marginRight: letter === ' ' ? '0.5em' : '0.1em'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          className="hero-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="subtitle-line"
            whileHover={{ scale: 1.1, color: "#ff6b35" }}
            transition={{ duration: 0.2 }}
          >
            First-Generation
          </motion.span>
          <motion.span 
            className="subtitle-line"
            whileHover={{ scale: 1.1, color: "#ff6b35" }}
            transition={{ duration: 0.2 }}
          >
            Literary Magazine
          </motion.span>
        </motion.div>
        
        <motion.div
          className="hero-description"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Where first-generation voices ignite the flame of creativity, 
            sharing stories that shape our generation and light the path forward.
          </motion.p>
        </motion.div>

        {/* Interactive Buttons with Scroll Indicator in between */}
        <motion.div
          className="hero-buttons-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="cta-button primary"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCarousel}
          >
            Read Stories
          </motion.button>

          {/* Animated Scroll Indicator - Between buttons */}
          <motion.div
            className="hero-scroll-indicator"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            onClick={scrollToCarousel}
          >
            <p>Explore Our Stories</p>
            <div className="scroll-arrow">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.button
            className="cta-button secondary"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/submit'}
          >
            Submit Work
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="hero-particles">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="hero-particle"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;