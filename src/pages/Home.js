import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Carousel />
    </div>
  );
};

export default Home;

