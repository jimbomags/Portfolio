import React, { Component } from 'react'

const ladders = {
  14: 8,
  38: 28,
  51: 11,
  76: 10,
  92: 5
}

const snakes = {
  21: 10,
  44: 19,
  63: 8,
  88: 24,
  99: 10,
}

const ladderKeys = Object.keys(ladders)
const snakesKeys = Object.keys(snakes)

class SnakesAndLadders extends Component {
  constructor(pros) {
    super(pros)
    this.state = {
      p1Turn: true,
      p1Score: 1,
      p2Turn: false,
      p2Score: 1
    }
    this.rollDice = this.rollDice.bind(this)
  }
  rollDice() {

    document.querySelector('#landed-on-s-or-l').innerText = ''

    var rndNum = Math.floor((Math.random() * 12) + 1)
    let sandlCheck = (this.state.p1Score + rndNum).toString()

    if (this.state.p1Turn) {

      document.querySelector('#roll-dice-info').innerText = `Player 1, you rolled ${rndNum}`
      document.querySelector('#next-player-turn').innerText = `Player 2, it's your turn next...`

      if ((this.state.p1Score + rndNum) > 100) {

        document.querySelector('#landed-on-s-or-l').innerText = `Sorry Player 1, you rolled a number that would move you above 100, therefore you stay in the same position`

        this.setState({
          p1Turn: false,
          p2Turn: true
        })
      }

      else if ((this.state.p1Score + rndNum) == 100) {
        alert(`Congratulations Player 1 you rolled ${rndNum} and landed on 100. You've Won!!!`)

        document.querySelector('#roll-dice-info').innerText = ''
        document.querySelector('#next-player-turn').innerText = ''

        this.setState({
          p1Turn: true,
          p1Score: 1,
          p2Turn: false,
          p2Score: 1
        })
      }

      else if (ladderKeys.includes(sandlCheck)) {

        document.querySelector('#landed-on-s-or-l').innerText = `Player 1! You landed on a ladder and moved up ${ladders[sandlCheck]} places`

        this.setState({
          p1Score: this.state.p1Score + rndNum + ladders[sandlCheck],
          p1Turn: false,
          p2Turn: true
        })
      }
      else if (snakesKeys.includes(sandlCheck)) {

        document.querySelector('#landed-on-s-or-l').innerText = `Oh No Player 1! You landed on a snake and moved down ${snakes[sandlCheck]} places`

        this.setState({
          p1Score: this.state.p1Score + rndNum - snakes[sandlCheck],
          p1Turn: false,
          p2Turn: true
        })
      }
      else {
        this.setState({
          p1Score: this.state.p1Score + rndNum,
          p1Turn: false,
          p2Turn: true
        })
      }
    }
    else {

      document.querySelector('#roll-dice-info').innerText = `Player 2, you rolled ${rndNum}`
      document.querySelector('#next-player-turn').innerText = `Player 1, it's your turn next...`

      let sandlCheck = (this.state.p2Score + rndNum).toString()

      if ((this.state.p2Score + rndNum) > 100) {

        document.querySelector('#landed-on-s-or-l').innerText = `Sorry Player 2, you rolled a number that would move you above 100, therefore you stay in the same position`

        this.setState({
          p1Turn: true,
          p2Turn: false
        })
      }

      else if ((this.state.p2Score + rndNum) == 100) {
        alert(`Congratulations Player 2 you rolled ${rndNum} and landed on 100. You've Won!!!`)

        document.querySelector('#roll-dice-info').innerText = ''
        document.querySelector('#next-player-turn').innerText = ''

        this.setState({
          p1Turn: true,
          p1Score: 1,
          p2Turn: false,
          p2Score: 1
        })
      }

      else if (ladderKeys.includes(sandlCheck)) {

        document.querySelector('#landed-on-s-or-l').innerText = `Player 2! You landed on a ladder and moved up ${ladders[sandlCheck]} places`

        this.setState({
          p2Score: this.state.p2Score + rndNum + ladders[sandlCheck],
          p2Turn: false,
          p1Turn: true
        })
      }
      else if (snakesKeys.includes(sandlCheck)) {

        document.querySelector('#landed-on-s-or-l').innerText = `Oh No Player 2! You landed on a snake and moved down ${snakes[sandlCheck]} places`

        this.setState({
          p2Score: this.state.p2Score + rndNum - snakes[sandlCheck],
          p2Turn: false,
          p1Turn: true
        })
      }
      else {
        this.setState({
          p2Score: this.state.p2Score + rndNum,
          p2Turn: false,
          p1Turn: true
        })
      }
    }
  }

  render() {
    const p1Position = (i) => {
      if (this.state.p1Score == i) {
        return 'p1-Circle'
      }
      else {
        return ''
      }
    }
    const p2Position = (i) => {
      if (this.state.p2Score == i) {
        return 'p2-Circle'
      }
      else {
        return ''
      }
    }

    const snakesAndLaddersPositions = (num) => {

      if (ladderKeys.includes(num.toString())) {
        return `(+${ladders[num.toString()]})`
      }
      else if (snakesKeys.includes(num.toString())) {
        return `(-${snakes[num.toString()]})`
      }
    }


    const board = () => {
      var grid = []
      var number = 100
      if (window.screen.width > 800) {
        for (var i = 0; i < 10; i++) {
          grid.push([])
          for (var k = 0; k < 10; k++) {
            grid[i].push(
              <div className='square' id={number} key={number}>
                <div id={p2Position(number)}></div>
                <p>{number}<b> {snakesAndLaddersPositions(number)}</b></p>
                <div id={p1Position(number)}></div>
              </div>)
            number--
          }
        }
      } else {
        for (var i = 0; i < 25; i++) {
          grid.push([])
          for (var k = 0; k < 4; k++) {
            grid[i].push(
              <div className='square' id={number} key={number}>
                <div id={p2Position(number)}></div>
                <p>{number}<b> {snakesAndLaddersPositions(number)}</b></p>
                <div id={p1Position(number)}></div>
              </div>)
            number--
          }
        }
      }
      return grid.map((arr, index) => {
        return (
          <div key={index} className='board-row'>
            {arr}
          </div>
        )
      })
    }
    return(
      <div id='sandl-container'>
        <div id='players'>
          <div id='p1' className='player-display'>
            <p>Player 1:</p>
            <div></div>
          </div>
          <div id='p2' className='player-display'>
            <p>Player 2:</p>
            <div></div>
          </div>
          <div id='score-info'>
            <p id='roll-dice-info'></p>
            <p id='landed-on-s-or-l'></p>
            <p id='next-player-turn'></p>
          </div>
          <button className='button push_button'  onClick={this.rollDice}>Roll Dice</button>
        </div>
        <div id='board'>
          {board()}
        </div>
      </div>
    )
  }
}

export default SnakesAndLadders

/*


*/
