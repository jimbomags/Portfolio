import React, { Component } from 'react'

var quote, author

const url = 'https://talaikis.com/api/quotes/random/';

(function() {


  fetch(url).then(response => {
    return response.text()
  }).then(text => {
    let resultsObj = JSON.parse(text);
    ({ quote, author } = resultsObj)
  })
}())

class RndQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote,
      author
    }
    this.getQuote = this.getQuote.bind(this)
  }
  getQuote() {

    fetch(url).then(response => {
      return response.text()
    }).then(text => {
      let resultsObj = JSON.parse(text)

      this.setState({
        quote: resultsObj.quote,
        author: resultsObj.author
      })
    })
  }
  render() {

    return (
      <div id='quote-container'>
        <p>&ldquo;{this.state.quote}&rdquo;</p>
        <p>&mdash; {this.state.author}</p>
        <button onClick={this.getQuote}>Get A New Quote</button>
      </div>
    )

  }
}

export default RndQuote
