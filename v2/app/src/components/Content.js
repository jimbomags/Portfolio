import React from 'react'
import Contact from './Contact'
import Weather from './Weather'
import SnakesAndLadders from './SnakesAndLadders'
import RndQuote from './RndQuote'

const Content = {
  home:
    <h1>James McGill<br/>Frontend Developer</h1>,
  about:
    <div id='about'>
      <div id='about-container'>
        <p>Hi, I’m James, and I’m a self-taught Junior Front End Developer. I started learning to code in August 2016 after deciding to change my career. I began by looking at my interests for inspiration and two things stood out, video games and tech. I immediately ruled out playing video games as I normally get thrashed when I play online – so I looked into tech. In deciding what to learn I looked back to when I was studying Computing for my A-levels. I was led to choosing web development when I realised my favourite projects were building a simple website and coding a snakes & ladders game in BASIC.</p>

        <p>Not knowing where to start I searched 'how to be a web developer' and started learning Python from a recommendation in a blog. Shortly after starting this course I became disgruntled, I was copying code to a code editor and not learning much. Therefore, I researched other options and decided to switch to learning HTML & CSS from Codecademy & Lynda - although I still plan on learning Python in the future. </p>

        <p>Once I had an understanding of HTML & CSS I moved onto JavaScript. Initially I used Codecademy and Lynda but was struggling to learn from their JS courses. That led me to search other options and I found FreeCodeCamp. I liked FCC because you learn by writing code to complete challenges. You start small such as declaring variables before moving onto more complex algorithms. Another part of FCC’s syllabus is completing projects, which comprised my first <a href='https://decorous-glove.surge.sh' target='_blank'>portfolio.</a></p>

        <p>When I finished my portfolio I decided to get feedback on my skills and what I needed to improve. The advice I received and from looking at job adverts, were that I needed to learn ES6, Node.js, a CSS pre-processor, task runners and a JS framework. At time of writing, the FCC syllabus is great for learning vanilla ES5 JavaScript but doesn’t provide very good content for the above skills. Therefore, I switched back to Lynda & Udemy. I watched a series of video courses to learn the above – choosing React for the JS framework – and deciding the best way to hone these skills was to build something with them. I chose to re-make my portfolio using React and re-creating two of the projects from my original portfolio. Finally, using my computing A-level as inspiration, I challenged to myself to create a snakes & ladders game. I hope you like it.</p>
      </div>
    </div>,
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
    rndQuote: <RndQuote />,
    weather: <Weather />,
    sandl: <SnakesAndLadders />
  }
}

export default Content
