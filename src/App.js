import image from "./pngtree-user-experience-png-image_6290263.png"
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Maya Khan</h1>
      <h2>Interaction Design</h2>
      <img src={image} className="App-logo" alt="logo" />
      <a
        className="Project1-Link"
        href="https://www.figma.com/design/bqaCYYtnmjIh4E3y9lKfso/Project-1%3A-Inch%2C-Foot%2C-Yard-Scale?m=dev&t=Uo9qonkwnPxUwE6L-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white' }}  // Keeps the link text white
      >
        Project 1: Inch, Foot, Yard Scale
      </a>
    </header>
  </div>
);
}

export default App;
