import React from 'react';

const Skills = () => {
  const skillsArr = [
    ['./assets/html5.png', 'HTML'],
    ['./assets/css3.png', 'CSS'],
    ['./assets/javascript.png', 'Javascript'],
    ['./assets/react.jpg', 'React'],
    ['./assets/node.png', 'Node'],
    ['./assets/sass.png', 'Sass'],
  ];
  return (
    <div id="skills">
      <h2>My Skill Set...</h2>
      <div id="skill-images-container">
        {skillsArr.map(item => (
          <div key={item[1]} className="skills">
            <img src={item[0]} alt={item[1]} />
            <p>{item[1]}</p>
          </div>
          ))}
      </div>
    </div>);
};

export default Skills;
