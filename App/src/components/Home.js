import React from 'react';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => (
  <div id="whole_container">
    <div id="home_container">
      <div id="home">
        <h1>James McGill<br /><span>Frontend Developer</span></h1>
        <a href="#about"><button id="about-me-btn">Find Out More</button></a>
      </div>
    </div>
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default Home;
