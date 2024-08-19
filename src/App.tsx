import React from 'react';
import './App.css';
import Navbar from './pages/Navbar.tsx';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About.tsx';
import Education from './pages/Education.tsx';
import Experiences from './pages/Experiences.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  const bgStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: '#f4f2ee'
  };

  return (
    <div className="App" style={bgStyle}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;