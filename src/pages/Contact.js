import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our mailing list!');
    setFormData({ name: '', email: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const pulseElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 30 + 20
  }));

  const connectionLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="contact-background">
        {/* Magnetic Field Effect */}
        <motion.div
          className="magnetic-field"
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 40 }}
        />

        {/* Pulsing Elements */}
        <div className="pulse-elements">
          {pulseElements.map((element) => (
            <motion.div
              key={element.id}
              className="pulse-element"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
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

        {/* Connection Lines */}
        <div className="connection-lines">
          {connectionLines.map((line) => (
            <motion.div
              key={line.id}
              className="connection-line"
              style={{
                left: `${line.startX}%`,
                top: `${line.startY}%`,
                width: `${Math.abs(line.endX - line.startX)}%`,
                height: `${Math.abs(line.endY - line.startY)}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: line.delay,
              }}
            />
          ))}
        </div>

        {/* Floating Icons */}
        <div className="floating-icons">
          {['📧', '📱', '💬', '🌐', '📞'].map((icon, index) => (
            <motion.div
              key={index}
              className="floating-icon"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + Math.sin(index) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-content" variants={itemVariants}>
          <motion.div
            className="contact-header"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="contact-title">Join Our Mailing List</h2>
            <motion.p
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Stay connected with Genesis news and events
            </motion.p>
          </motion.div>
          
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Contact Information
              </motion.h3>
              
              {[
                { icon: "📧", title: "Email", info: "genesis@bc.edu" },
                { icon: "📍", title: "Location", info: "Boston College\nChestnut Hill, MA" },
                { icon: "📱", title: "Follow Us", info: "@genesis_bc on Instagram" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={itemVariants}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="form-header"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <h3>Get Connected</h3>
                <p>Join our community of storytellers</p>
              </motion.div>

              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="form-group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                >
                  <motion.label
                    htmlFor={field.name}
                    animate={{
                      color: isTyping && formData[field.name] ? "#ff6b35" : "rgba(255, 255, 255, 0.8)"
                    }}
                  >
                    {field.label}
                  </motion.label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 107, 53, 0.3)"
                    }}
                    animate={{
                      borderColor: formData[field.name] ? "#ff6b35" : "rgba(255, 255, 255, 0.3)"
                    }}
                  />
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                className="submit-btn"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Join Mailing List
                </motion.span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;