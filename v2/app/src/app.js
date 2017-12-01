import React, { Component } from 'react';
import Content from './components/Content';

const skills = <div id='skills'>
  <h2>My Skill Set...</h2>
  <div id='skill-images-container'>
    {Content.skills.map((item) => {
      return (
        <div key={item[0]} className='skills'>
          <img src={item[1]} />
          {item[2]}
        </div>
      );
    })}
  </div>
</div>;

class App extends Component {
  
  showNav() {
    let links = document.querySelector('#links');

    if (links.style.display == 'none' || links.style.display == '') {
      links.style.display = 'flex';
    } else {
      links.style.display = 'none';
    }
  }
  render() {
    return (
      <div id='whole_container'>
        <div id='home_container'>
          <nav>
            <div id='burger_icon' onClick={this.showNav}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul id='links'>
              <a href='#about'>About</a>
              <a href='#skills'>Skills</a>
              <a href='#portfolio-container'>Portfolio</a>
              <a href='#contact'>Contact</a>
            </ul>
          </nav>
          {Content.home}
        </div>
        {Content.about}
        {skills}
        {Content.portfolio}
        {Content.contact}
      </div>
    );
  }
}

export default App;
