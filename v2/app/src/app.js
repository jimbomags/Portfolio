import React, { Component } from 'react'
import Content from './components/Content'

const skills = <div id='skills_container'>
  {Content.skills.map((item) => {
    return (
      <div key={item[0]} className='skills'>
        <img src={item[1]} />
        {item[2]}
      </div>
    )
  })}
</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: Content.home
    }
    this.changeContent = this.changeContent.bind(this)
    this.portClicked = this.portClicked.bind(this)
    this.displayNav = this.displayNav.bind(this)
  }
  changeContent(newContent) {
    const contContainer = document.querySelector('#content')
    if (newContent == skills) {
      contContainer.style.backgroundImage = 'none'
    }
    else if (this.state.content == skills) {
      contContainer.style.backgroundImage = 'url(\'/assets/background_desktop.jpg\')'
    }
    this.setState({content: newContent})
  }
  portClicked() {
    const port = document.querySelectorAll('.port')

    if (window.screen.width < 1050) {

      port.forEach(item => {
        if (item.style.display == 'block') {
          item.style.display = 'none'
        }
        else {
          item.style.display = 'block'
        }
        item.classList.toggle('clicked_port')
      })
    }
  }
  displayNav() {
    const links = document.querySelector('#links')
    if (links.style.display == 'flex') {
      links.style.display = ''
    }
    else {
      links.style.display = 'flex'
    }
  }

  render() {
    return (
      <div id='main_container'>
        <nav>
          <img id='logo' src='../assets/logo.png' onClick={() => {
            this.changeContent(Content.home)}
          }/>
          <ul id='links'>
            <p onClick={() => {
              this.displayNav()
              this.changeContent(Content.home)}
            }>Home</p>
            <p onClick={() => {
              this.displayNav()
              this.changeContent(Content.about)}
            }>About</p>
            <p onClick={() => {
              this.displayNav()
              this.changeContent(skills)}
            }>Skills</p>
            <div id='port_links'>
              <p onClick={this.portClicked}>Portfolio</p>
              <div id='port_links_content'>
                <p className='port' onClick={() => {
                  this.displayNav()
                  this.changeContent(Content.portfolio.rndQuote)}
                }>Random Quote</p>
                <p className='port' onClick={() => {
                  this.displayNav()
                  this.changeContent(Content.portfolio.weather)}
                }>Weather App</p>
                <p className='port' onClick={() => {
                  this.displayNav()
                  this.changeContent(Content.portfolio.sandl)}
                }>Snakes & Ladders</p>
              </div>
            </div>
            <p onClick={() => {
              this.displayNav()
              this.changeContent(Content.contact)}
            }>Contact</p>
          </ul>
          <div id='burger_icon' onClick={this.displayNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        <div id='content'>
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default App
