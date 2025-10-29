import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Submit from './pages/Submit';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

