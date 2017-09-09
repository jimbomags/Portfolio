import React from 'react'
import Contact from './Contact'
import Weather from './Weather'

const Content = {
  home:
    <h1>James McGill<br/>Frontend Developer</h1>,
  about:
    <span id='about'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>,
  skills: [
    [1,'./assets/html5.png',<p>HTML</p>],
    [2,'./assets/css3.png',<p>CSS</p>],
    [3,'./assets/javascript.png',<p>Javascript</p>],
    [4,'./assets/react.jpg',<p>React</p>],
    [5,'./assets/node.png',<p>Node</p>],
    [6,'./assets/sass.png',<p>Sass</p>]
  ],
  contact: <Contact />,
  portfolio: {
    weather: <Weather />
  }
}

export default Content
