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
  }
  changeContent(newContent) {
    this.setState({content: newContent})
  }

  render() {
    return (
      <div id='main_container'>
        <nav>
          <img id='logo' src='../assets/logo.png' onClick={() => this.changeContent(Content.home)}/>
          <ul id='links'>
            <p onClick={() => this.changeContent(Content.home)}>Home</p>
            <p onClick={() => this.changeContent(Content.about)}>About</p>
            <p onClick={() => this.changeContent(skills)}>Skills </p>
            <div id='port_links'>
              <p>Portfolio</p>
              <div id='port_links_content'>
                <p className='port' onClick={() => this.changeContent(Content.portfolio.rndQuote)}>Random Quote</p>
                <p className='port' onClick={() => this.changeContent(Content.portfolio.weather)}>Weather App</p>
                <p className='port' onClick={() => this.changeContent(Content.portfolio.sandl)}>Snakes & Ladders</p>
              </div>
            </div>
            <p onClick={() => this.changeContent(Content.contact)}>Contact</p>
          </ul>
        </nav>
        <div id='content'>
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default App
