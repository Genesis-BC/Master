import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Voices Rising",
      description: "Discover powerful stories from first-generation students who are breaking barriers and creating change.",
      image: "/images/slide1.jpg",
      color: "#ff6b35"
    },
    {
      id: 2,
      title: "Dreams Ignited",
      description: "Explore the creative expressions of young writers, artists, and thinkers shaping tomorrow.",
      image: "/images/slide2.jpg",
      color: "#d2691e"
    },
    {
      id: 3,
      title: "Stories That Matter",
      description: "Journey through narratives that capture the essence of first-generation experiences and aspirations.",
      image: "/images/slide3.jpg",
      color: "#ff8c00"
    },
    {
      id: 4,
      title: "Community United",
      description: "Join a vibrant community of storytellers, dreamers, and change-makers at Boston College.",
      image: "/images/slide4.jpg",
      color: "#ff6b35"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const slideTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <motion.div
          className="carousel-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Stories
        </motion.div>
        
        <motion.p
          className="carousel-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Immerse yourself in the voices that define our generation
        </motion.p>
        
        <div className="carousel-wrapper">
          <div className="carousel-slides-container">
            <AnimatePresence mode="wait" custom={currentSlide}>
              <motion.div
                key={currentSlide}
                custom={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="carousel-slide"
                style={{
                  background: `linear-gradient(135deg, ${slides[currentSlide].color}20, ${slides[currentSlide].color}10)`,
                }}
              >
                <div className="slide-content">
                  <motion.div
                    className="slide-image"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="image-placeholder">
                      <div className="image-text">Story Image</div>
                      <div className="image-overlay"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="slide-info"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.h3
                      className="slide-title"
                      style={{ color: slides[currentSlide].color }}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    
                    <motion.p
                      className="slide-description"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    
                    <motion.button
                      className="slide-button"
                      style={{ backgroundColor: slides[currentSlide].color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${slides[currentSlide].color}40` }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <motion.button
            className="carousel-btn prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </motion.button>
          
          <motion.button
            className="carousel-btn next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </motion.button>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  backgroundColor: index === currentSlide ? slides[currentSlide].color : 'rgba(255, 255, 255, 0.3)',
                  scale: index === currentSlide ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
        
        {/* Auto-play Toggle */}
        <motion.div
          className="carousel-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`auto-play-btn ${isAutoPlaying ? 'active' : ''}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;