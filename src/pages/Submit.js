import React, { useEffect, useState } from 'react';
import { motion} from 'framer-motion';
import './Submit.css';

const Submit = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const spiralElements = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 30,
    radius: 50 + i * 10,
    delay: i * 0.1,
    size: Math.random() * 15 + 5
  }));

  const textParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    text: ['story', 'voice', 'dream', 'hope', 'future', 'create', 'inspire', 'share'][i]
  }));

  return (
    <div className="submit-page">
      {/* Animated Background */}
      <div className="submit-background">
        {/* Spiral Effect - Reduced and positioned safely */}
        <div className="spiral-container">
          {spiralElements.slice(0, 15).map((element) => (
            <motion.div
              key={element.id}
              className="spiral-element"
              style={{
                left: `50%`,
                top: `50%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                transform: `rotate(${element.angle}deg) translateX(${element.radius}px)`,
                zIndex: 1,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.3, 0.8, 0.3],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}
        </div>

        {/* Floating Text Particles - Fixed positioning */}
        <div className="text-particles">
          {textParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="text-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                zIndex: 1,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: particle.delay,
              }}
            >
              {particle.text}
            </motion.div>
          ))}
        </div>

        {/* Lightning Effect */}
        <div className="lightning-container">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.div
              key={i}
              className="lightning"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Magnetic Cursor */}
        <motion.div
          className="magnetic-cursor"
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <motion.div
        className="submit-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="submit-content" variants={itemVariants}>
          <motion.div
            className="submit-header"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="submit-title">Submit Your Work</h2>
            <motion.p
              className="submit-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Share your voice with the Genesis community
            </motion.p>
          </motion.div>
          
          <motion.div
            className="submission-guidelines"
            variants={itemVariants}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Submission Guidelines
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                "Open to all first-generation students at Boston College",
                "Accepting poetry, prose, creative writing, and visual art",
                "Submissions should be original, unpublished work",
                "Include a brief bio (50-100 words)",
                "You only need to fill out what you want in the form"
              ].map((guideline, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    color: "#ff6b35",
                    transition: { duration: 0.3 }
                  }}
                >
                  {guideline}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div
              className="anonymous-info"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h4
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                Anonymous Submissions
              </motion.h4>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.6 }}
              >
                We understand that some submissions may be anonymous. Please note that our Google form 
                will record your email address not because we want to track you, but in case we notice 
                an error or need to contact the author. Your email will be kept confidential and only 
                used for editorial purposes.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="submission-link"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJmm9kZb3AYuDouZNJvWNXZ0SIUFUmhEEUfwsIBNNIG_Glig/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="google-form-link"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(255, 107, 53, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: isHovering 
                  ? "0 10px 30px rgba(255, 107, 53, 0.3)" 
                  : "0 5px 20px rgba(255, 107, 53, 0.2)"
              }}
            >
              <motion.span
                animate={{ 
                  x: isHovering ? [0, 5, 0] : 0,
                }}
                transition={{ 
                  duration: 1, 
                  repeat: isHovering ? Infinity : 0 
                }}
              >
                Submit Your Work via Google Form
              </motion.span>
            </motion.a>
            <motion.p
              className="link-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              Click the link above to access our submission form. You can fill out as much or as little 
              information as you're comfortable with.
            </motion.p>
            
            {/* Interactive Elements */}
            <motion.div
              className="interactive-elements"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              {['✨', '📝', '🎨', '💫'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="interactive-emoji"
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${60 + Math.sin(index) * 20}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Submit;