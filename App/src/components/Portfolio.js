import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Portfolio = () => (
  <div id="portfolio-home">
    <h2>What I can do...</h2>
    <div id="port-links-container">
      <Link to='/snakesandladders'>
      <div className="link-container">
        <div
          id="port-sl"
          className="port-links"
          role="button"
          tabIndex="0"
        />
        <div className="port-info">
          <h3>Snakes & Ladders Game</h3>
        </div>
      </div>
      </Link>
      <Link to='/weather'>
      <div className="link-container">
        <div
          id="port-weather"
          className="port-links"
          role="button"
          tabIndex="0"
        />
        <div className="port-info">
          <h3>Weather App</h3>
        </div>
      </div>
      </Link>
      <Link to="/randomquote">
      <div className="link-container">
        <div
          id="port-quote"
          className="port-links"
          role="button"
          tabIndex="0"
        />
        <div className="port-info">
          <h3>Random Quote Generator</h3>
        </div>
      </div>
      </Link>
      <Link to="/bookmark">
        <div className="link-container">
          <div
            id="port-bookmark"
            className="port-links"
            role="button"
            tabIndex="0"
          />
          <div className="port-info">
            <h3>Bookmark App</h3>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default Portfolio;
