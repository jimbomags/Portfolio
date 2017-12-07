import React, { Component } from 'react';
import BackArrow from 'react-icons/lib/fa/arrow-left';
import Weather from './Weather';
import SnakesAndLadders from './Snakesandladders';
import RndQuote from './RndQuote';

function HomePortfolio(props) {
  return (
    <div id="portfolio-home">
      <h2>What I can do...</h2>
      <div id="port-links-container">
        <div className="link-container">
          <div
            id="port-sl"
            className="port-links"
            role="button"
            tabIndex="0"
            onClick={() => props.handleState({ content: 'sandl' })}
            onKeyPress={() => props.handleState({ content: 'sandl' })}
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
            onClick={() => props.handleState({ content: 'weather' })}
            onKeyPress={() => props.handleState({ content: 'weather' })}
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
            onClick={() => props.handleState({ content: 'rnd-quote' })}
            onKeyPress={() => props.handleState({ content: 'rnd-quote' })}
          />
          <div className="port-info">
            <h3>Random Quote Generator</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
function BackButton(props) {
  return (
    <div
      id="back"
      role="button"
      tabIndex="0"
      onClick={() => props.handleState({ content: 'home' })}
      onKeyPress={() => props.handleState({ content: 'home' })}
      style={{ display: props.back }}
    >
      <BackArrow />
      Back
    </div>
  );
}

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

    if (this.state.content === 'home') {
      display = <HomePortfolio handleState={this.handleState} />;
    } else if (this.state.content === 'sandl') {
      display = <SnakesAndLadders />;
    } else if (this.state.content === 'weather') {
      display = <Weather />;
    } else if (this.state.content === 'rnd-quote') {
      display = <RndQuote />;
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
