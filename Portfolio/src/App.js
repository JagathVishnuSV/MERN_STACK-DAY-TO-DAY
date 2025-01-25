import React from 'react';
import Navbar from './Components/Navbar';
import About from './About';
import Portfolio from './portfolio';
import Contact from './Contact';
import Home from './Home';
import { useState } from 'react';
import './App.css'; 
const App = () => {
  const [activeSection, setActiveSection] = useState('home'); 

  const handleNavigation = (section) => {
    setActiveSection(section); 
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
    </div>
  );
};

export default App;

