import React, { Component } from 'react'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      about: false,
      skills: false,
      contact: false
    }
    this.home = this.home.bind(this)
    this.about = this.about.bind(this)
    this.skills = this.skills.bind(this)
    this.contact = this.contact.bind(this)
  }
  home() {
    this.setState({
      home: true,
      about: false,
      skills: false,
      contact: false
    })
  }
  about() {
    this.setState({
      home: false,
      about: true,
      skills: false,
      contact: false
    })
  }
  skills() {
    this.setState({
      home: false,
      about: false,
      skills: true,
      contact: false
    })
  }
  contact() {
    this.setState({
      home: false,
      about: false,
      skills: false,
      contact: true
    })
  }
  render() {
    var items
    if (this.state.home) {
      ({ home: items } = Content)
    } else if (this.state.about) {
      ({ about: items } = Content)
    } else if (this.state.skills) {
      items = <div id='skills_container'>
        {Content.skills.map(function skillsHtmlGen(item) {
          return (
            <div key={item[0]} className='skills'>
              <img src={item[1]} />
              {item[2]}
            </div>
          )
        })}
      </div>
    } else if (this.state.contact) {
      ({ contact: items } = Content)
    }

    return (
      <div id='main_container'>
        <nav>
          <img id='logo' src='../assets/logo.png' onClick={this.home}/>
          <ul id='links'>
            <p onClick={this.home}>Home</p>
            <p onClick={this.about}>About</p>
            <p onClick={this.skills}>Skills </p>
            <div id='port_links'>
              <p>Portfolio</p>
              <div id='port_links_content'>
                <p className='port'>Weather App</p>
                <p className='port'>Snakes & Ladders</p>
                <p className='port'>Wikipedia Search</p>
                <p className='port'>Netflix</p>
              </div>
            </div>
            <p onClick={this.contact}>Contact</p>
          </ul>
        </nav>
        <div id='content'>
          {items}
        </div>
      </div>
    )
  }
}

export default App
