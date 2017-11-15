import React, { Component } from 'react'
import Weather from './Weather'
import SnakesAndLadders from './SnakesAndLadders'
import RndQuote from './RndQuote'
import BackArrow from 'react-icons/lib/fa/arrow-left'

class Portfolio extends Component {
  constructor (props) {
    super (props)
    this.state = {
      home: true,
      sandl: false,
      weather: false,
      rndQuote: false
    }
    this.handleState = this.handleState.bind(this)
  }
  handleState(obj) {
    let back = document.querySelector('#back')
    if (obj.home == false) {
      back.style.display = 'flex'
    } else {
      back.style.display = 'none'
    }
    this.setState(obj)
  }
  render() {
    let display

    const homePortfolio = <div id='portfolio-home'>
      <h2>What I can do...</h2>
      <div id='port-links-container'>
        <div className='link-container'>
          <div id='port-sl' className='port-links' onClick={() => {
            this.handleState({
              home: false,
              sandl: true,
              weather: false,
              rndQuote: false
            })
          }}>
          </div>
          <div className='port-info'>
            <h3>Snakes & Ladders Game</h3>
          </div>
        </div>
        <div className='link-container'>
          <div id='port-weather' className='port-links' onClick={() => {
            this.handleState({
              home: false,
              sandl: false,
              weather: true,
              rndQuote: false
            })
          }}>
          </div>
          <div className='port-info'>
            <h3>Weather App</h3>
          </div>
          <p></p>
        </div>
        <div className='link-container'>
          <div id='port-quote' className='port-links' onClick={() => {
            this.handleState({
              home: false,
              sandl: false,
              weather: false,
              rndQuote: true
            })
          }}>
          </div>
          <div className='port-info'>
            <h3>Random Quote Generator</h3>
          </div>
        </div>
      </div>
    </div>

    if (this.state.home == true) {
      display = homePortfolio
    } else if (this.state.sandl) {
      display = <SnakesAndLadders />
    } else if (this.state.weather) {
      display = <Weather />
    } else if (this.state.rndQuote) {
      display = <RndQuote />
    }

    return <div id='portfolio-container'>
      <div id='back' onClick={() => this.handleState({
        home: true,
        sandl: false,
        weather: false,
        rndQuote: false})}>
        <BackArrow /> Back
      </div>
      {display}
    </div>
  }
}

export default Portfolio
