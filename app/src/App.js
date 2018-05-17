import React, { Component } from 'react';
import Content from './components/Content';

function Nav(props) {
  return (
    <nav>
      <div
        id="burger_icon"
        role="button"
        tabIndex="0"
        onKeyPress={props.showNav}
        onClick={props.showNav}
      >
        <div />
        <div />
        <div />
      </div>
      <ul id="links" style={{ display: props.display }}>
        <a href="#about" tabIndex="0">About</a>
        <a href="#skills" role="button" tabIndex="0">Skills</a>
        <a href="#portfolio-container" role="button" tabIndex="0">Portfolio</a>
        <a href="#contact" role="button" tabIndex="0">Contact</a>
      </ul>
    </nav>);
}

const Title = ({ title }) => title;

Title.propTypes = {
  title: React.PropTypes.string,
};


function About(props) {
  return props.about;
}

function Skills(props) {
  return (
    <div id="skills">
      <h2>My Skill Set...</h2>
      <div id="skill-images-container">
        {props.content.map(item => (
          <div key={item[0]} className="skills">
            <img src={item[1]} alt={item[2]} />
            {item[2]}
          </div>
          ))}
      </div>
    </div>);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
    };

    this.showNav = this.showNav.bind(this);
  }
  showNav() {
    this.setState(this.state.display === 'flex' ? { display: 'none' } : { display: 'flex' });
  }
  render() {
    return (
      <div id="whole_container">
        <div id="home_container">
          <Nav display={this.state.display} showNav={this.showNav} />
          <Title title={Content.title} />
        </div>
        <About about={Content.about} />
        <Skills content={Content.skills} />
        {Content.portfolio}
        {Content.contact}
      </div>
    );
  }
}

module.exports = {
  App,
  Title,
  About,
};
