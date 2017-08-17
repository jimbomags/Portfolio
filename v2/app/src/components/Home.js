import React, { Component } from 'react'
import NavBar from './NavBar'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {home: true}

    this.about = this.about.bind(this)
  }
  about() {
    this.setState({home: !this.state.home})
  }
  render() {
    var content
    (this.state.home) ? content = <span>James McGill<br/>Frontend Developer</span>: content = 'Hello World'

    return (
      <div>
        <NavBar />
        <h1 onClick={this.about}>{content}</h1>
      </div>
    )
  }
}

export default Home
