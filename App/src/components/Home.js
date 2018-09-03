import React from 'react';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const scrollToAbout = () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Home = () => (
  <div id="whole_container">
    <div id="home_container">
      <div id="home">
        <h1>James McGill<br /><span>Frontend Developer</span></h1>
        <button id="about-me-btn" onClick={scrollToAbout}>Find Out More</button>
      </div>
    </div>
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default Home;
