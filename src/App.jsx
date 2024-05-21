// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Services from './components/Services';
import Project from './components/Project';
import Education from './components/Education';



const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Project />} />
        </Routes>
      </main>
    
    </Router>
  );
};

export default App;
