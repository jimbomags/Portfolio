import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <img id='logo' src='../assets/logo.png'/>
        <ul id='links'>
          <p>About</p>
          <p>Skills</p>
          <div id='port_links'>
            <p>Portfolio <span className='caret'></span></p>
            <div id='port_links_content'>
              <p>Weather App</p>
              <br/>
              <br/>
              <p>Snakes & Ladders</p>
            </div>
          </div>
          <p>Contact</p>
        </ul>
      </nav>
    )
  }
}

export default NavBar

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// );
