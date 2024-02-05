import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import 'animate.css';



const App = () => {
  return (
    <div>
      <Navbar />
      
      <main>
        <div id='home'>
          <Home />          
        </div>

        <div id='sercices'>
        <Skills/>
        </div>

        <div id='portFolio'>
          <Portfolio/>
        </div>
      </main>
    </div>
  );
};

export default App
