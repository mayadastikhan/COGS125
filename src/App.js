import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import image from "./pngtree-user-experience-png-image_6290263.png";
import './App.css';

function Home() {
  return (
    <div className="App-header">
      <h1>Maya Khan</h1>
      <h2>Interaction Design</h2>
      <img src={image} className="App-logo" alt="logo" />
      <a
        className="Project1-Link"
        href="https://www.figma.com/design/bqaCYYtnmjIh4E3y9lKfso/Project-1%3A-Inch%2C-Foot%2C-Yard-Scale?m=dev&t=Uo9qonkwnPxUwE6L-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white' }}
      >
        Project 1: Inch, Foot, Yard Scale
      </a>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="App-header">
      <h1>My Portfolio</h1>
      <p>Explore my projects and case studies!</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="App-header">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or connect on LinkedIn!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;