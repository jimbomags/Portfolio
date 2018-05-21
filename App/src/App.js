import React from 'react';

import NavBarContainer from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => (
  <div id="whole_container">
    <div id="home_container">
      <NavBarContainer />
      <Home />
    </div>
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </div>);

export default App;
