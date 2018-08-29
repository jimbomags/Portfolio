import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackArrow from 'react-icons/lib/fa/arrow-left';
import Weather from './Weather';
import SnakesAndLadders from './Snakesandladders';
import RndQuote from './RndQuote';

const HomePortfolio = ({ handleState }) => (
  <div id="portfolio-home">
    <h2>What I can do...</h2>
    <div id="port-links-container">
      <div className="link-container">
        <div
          id="port-sl"
          className="port-links"
          role="button"
          tabIndex="0"
          onClick={() => handleState({ content: 'sandl' })}
          onKeyPress={() => handleState({ content: 'sandl' })}
        />
        <div className="port-info">
          <h3>Snakes & Ladders Game</h3>
        </div>
      </div>
      <div className="link-container">
        <div
          id="port-weather"
          className="port-links"
          role="button"
          tabIndex="0"
          onClick={() => handleState({ content: 'weather' })}
          onKeyPress={() => handleState({ content: 'weather' })}
        />
        <div className="port-info">
          <h3>Weather App</h3>
        </div>
      </div>
      <div className="link-container">
        <div
          id="port-quote"
          className="port-links"
          role="button"
          tabIndex="0"
          onClick={() => handleState({ content: 'rnd-quote' })}
          onKeyPress={() => handleState({ content: 'rnd-quote' })}
        />
        <div className="port-info">
          <h3>Random Quote Generator</h3>
        </div>
      </div>
      <div className="link-container">
        <div
          id="port-bookmark"
          className="port-links"
          role="button"
          tabIndex="0"
          onClick={() => handleState({ content: 'weather' })}
          onKeyPress={() => handleState({ content: 'weather' })}
        />
        <div className="port-info">
          <h3>Bookmark App</h3>
        </div>
      </div>
    </div>
  </div>
);

HomePortfolio.propTypes = {
  handleState: PropTypes.func.isRequired,
};

const BackButton = ({ handleState, back }) => (
  <div
    id="back"
    role="button"
    tabIndex="0"
    onClick={() => handleState({ content: 'home' })}
    onKeyPress={() => handleState({ content: 'home' })}
    style={{ display: back }}
  >
    <BackArrow />
    Back
  </div>
);

BackButton.propTypes = {
  handleState: PropTypes.func.isRequired,
  back: PropTypes.string.isRequired,
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back: '',
      content: 'home',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState(obj) {
    this.setState(obj.content === 'home' ? { back: 'none' } : { back: 'flex' });
    this.setState(obj);
  }

  render() {
    let display;

    switch (this.state.content) {
      case 'home':
        display = <HomePortfolio handleState={this.handleState} />;
        break;
      case 'sandl':
        display = <SnakesAndLadders />;
        break;
      case 'weather':
        display = <Weather />;
        break;
      case 'rnd-quote':
        display = <RndQuote />;
        break;
      default: display = <HomePortfolio handleState={this.handleState} />;
    }

    return (
      <div id="portfolio-container">
        <BackButton back={this.state.back} handleState={this.handleState} />
        {display}
      </div>
    );
  }
}

export default Portfolio;
