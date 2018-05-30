import React, { Component } from 'react';

let quote;
let author;

const url = 'https://talaikis.com/api/quotes/random/';

class RndQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote,
      author,
    };
    this.getQuote = this.getQuote.bind(this);
  }
  componentDidMount() {
    this.getQuote();
  }
  getQuote() {
    fetch(url).then(response => response.text()).then((text) => {
      const resultsObj = JSON.parse(text);

      this.setState({
        quote: resultsObj.quote,
        author: resultsObj.author,
      });
    });
  }
  render() {
    return (
      <div id="quote-container">
        <p>&ldquo;{this.state.quote}&rdquo;</p>
        <p>&mdash; {this.state.author}</p>
        <button id="quote-button" className="button push_button" onClick={this.getQuote}>Get A New Quote</button>
      </div>
    );
  }
}

export default RndQuote;
