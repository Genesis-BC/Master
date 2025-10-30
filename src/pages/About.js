import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    // Advisors
    {
      id: 1,
      name: "Amy Alvarez",
      position: "Advisor",
      year: "",
      image: "/images/amy.jpg",
      bio: "Amy provides guidance and support to the Genesis team, helping shape our mission and vision."
    },
    {
      id: 2,
      name: "Kathleen Gonso",
      position: "Advisor",
      year: "",
      image: "/images/kathleen.jpg",
      bio: "Kathleen brings her expertise to guide Genesis in creating meaningful content for first-generation students."
    },
    {
      id: 3,
      name: "Krithika Vachali",
      position: "Advisor",
      year: "",
      image: "/images/krithika.jpg",
      bio: "Krithika supports Genesis with her knowledge and experience in student development."
    },
    {
      id: 4,
      name: "Lynne Anderson",
      position: "Advisor",
      year: "",
      image: "/images/lynne.jpg",
      bio: "Lynne provides strategic guidance to help Genesis reach and serve the first-generation community."
    },
    // Leadership & Core Team
    {
      id: 5,
      name: "Jorge Saquinaula",
      position: "Website Manager",
      year: "",
      image: "/images/jorge.jpg",
      bio: "Jorge develops and maintains the digital platform that brings Genesis's stories to life online."
    },
    {
      id: 6,
      name: "Jessica Cruz-Lopez",
      position: "Communication",
      year: "",
      image: "/images/jessica.jpg",
      bio: "Jessica manages internal and external communications, ensuring our message reaches the community effectively."
    },
    {
      id: 7,
      name: "Michelle Chavez Ramirez",
      position: "Marketing",
      year: "",
      image: "/images/michelle.jpg",
      bio: "Michelle leads our marketing efforts to promote Genesis and engage with first-generation students."
    },
    // Editors
    {
      id: 8,
      name: "Andres Preciado",
      position: "Poetry Editor",
      year: "",
      image: "/images/andres.jpg",
      bio: "Andres curates and edits poetry submissions, helping amplify the poetic voices of first-generation students."
    },
    {
      id: 9,
      name: "Haybi Garcia Barrios",
      position: "Poetry Editor",
      year: "",
      image: "/images/haybi.jpg",
      bio: "Haybi works alongside Andres to select and refine poetry that captures the first-generation experience."
    },
    {
      id: 10,
      name: "Jose Builes Lemus",
      position: "Prose Editor",
      year: "",
      image: "/images/jose.jpg",
      bio: "Jose reviews and edits prose submissions, ensuring each story is told with clarity and impact."
    },
    {
      id: 11,
      name: "Kevin Uriarte",
      position: "Prose Editor",
      year: "",
      image: "/images/kevin.jpg",
      bio: "Kevin collaborates with Jose to curate compelling prose that resonates with our community."
    },
    {
      id: 12,
      name: "Laetitia Duroucroix",
      position: "Art Editor",
      year: "",
      image: "/images/laetitia.jpg",
      bio: "Laetitia selects and curates visual art that complements and enhances our literary content."
    },
    {
      id: 13,
      name: "Leidy Rodriguez Gomez",
      position: "Art Editor",
      year: "",
      image: "/images/leidy.jpg",
      bio: "Leidy works with Laetitia to showcase visual storytelling that speaks to the first-generation experience."
    },
    {
      id: 14,
      name: "Boluwatife Akinnagbe",
      position: "Layout Editor",
      year: "",
      image: "/images/boluwatife.jpg",
      bio: "Boluwatife designs the visual layout of our publications, creating beautiful and readable formats."
    },
    // Design & Media
    {
      id: 15,
      name: "Kayla Le",
      position: "Graphic Design",
      year: "",
      image: "/images/kayla.jpg",
      bio: "Kayla creates compelling visual designs that represent Genesis's brand and mission."
    },
    {
      id: 16,
      name: "Lucia Flores",
      position: "Graphic Design",
      year: "",
      image: "/images/lucia.jpg",
      bio: "Lucia collaborates with Kayla to develop creative visual content for Genesis."
    },
    {
      id: 17,
      name: "Maria D'Souza",
      position: "Social Media",
      year: "",
      image: "/images/maria.jpg",
      bio: "Maria manages our social media presence, connecting with the community across digital platforms."
    },
    {
      id: 18,
      name: "Songxuan Le",
      position: "Social Media",
      year: "",
      image: "/images/songxuan.jpg",
      bio: "Songxuan works with Maria to create engaging social media content that amplifies our message."
    },
    {
      id: 19,
      name: "Miguel Munoz",
      position: "Team Member",
      year: "",
      image: "/images/miguel.jpg",
      bio: "Miguel contributes to Genesis's mission through various creative and organizational efforts."
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 20 + 10
  }));

  return (
    <div className="about-page">
      {/* Animated Background */}
      <div className="about-background">
        <motion.div
          className="magnetic-cursor"
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="floating-shape"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}
        </div>

        {/* Animated Waves */}
        <div className="wave-container">
          <motion.div
            className="wave wave-1"
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="wave wave-2"
            animate={{
              x: [0, -100, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-header" variants={itemVariants}>
          <motion.h1
            className="about-title"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About Genesis
          </motion.h1>
          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            First-Generation Voices at Boston College
          </motion.p>
        </motion.div>
        
        <motion.div className="about-mission" variants={itemVariants}>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Genesis is more than a literary magazine, it's a sanctuary for first-generation voices 
            to share their stories, struggles, and triumphs. Born from the fire of Prometheus, 
            we believe that every voice deserves to be heard, every story deserves to be told.
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Our mission is to create a platform where first-generation students can express 
            their unique perspectives through poetry, prose, art, and creative writing. 
            We celebrate the resilience, creativity, and strength that defines our community.
          </motion.p>
        </motion.div>

        <motion.div className="about-stats" variants={itemVariants}>
          {[
            { number: "0", label: "Published Works" },
            { number: "20+", label: "Contributors" },
            { number: "<1", label: "Year Strong" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 40px rgba(255, 107, 53, 0.4)"
              }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.2 }}
              >
                {stat.number}
              </motion.h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="team-section" variants={itemVariants}>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-member"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 15px 30px rgba(255, 107, 53, 0.3)"
                }}
              >
                <motion.div
                  className="member-image"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="image-placeholder">
                    <span>{member.name.split(' ')[0]}</span>
                  </div>
                </motion.div>
                <div className="member-info">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 + index * 0.1 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="member-position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.7 + index * 0.1 }}
                  >
                    {member.position}
                  </motion.p>
                  <motion.p
                    className="member-year"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.9 + index * 0.1 }}
                  >
                    {member.year}
                  </motion.p>
                  <motion.p
                    className="member-bio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.1 + index * 0.1 }}
                  >
                    {member.bio}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;