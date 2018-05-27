import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ladders = {
  14: 8,
  38: 28,
  51: 11,
  76: 10,
  92: 5,
};
const snakes = {
  21: 10,
  44: 19,
  63: 8,
  88: 24,
  99: 10,
};
const ladderKeys = Object.keys(ladders);
const snakesKeys = Object.keys(snakes);

const Players = ({
  rollDice,
  diceInfo,
  turnInfo,
  nextPlayerTurn,
}) => (
  <div id="players">
    <div id="p1" className="player-display">
      <p>Player 1:</p>
      <div />
    </div>
    <div id="p2" className="player-display">
      <p>Player 2:</p>
      <div />
    </div>
    <div id="score-info">
      <p id="roll-dice-info">{diceInfo}</p>
      <p id="landed-on-s-or-l">{turnInfo}</p>
      <p id="next-player-turn">{nextPlayerTurn}</p>
    </div>
    <button className="button push_button" onClick={rollDice}>Roll Dice</button>
  </div>
);

Players.propTypes = {
  rollDice: PropTypes.func.isRequired,
  diceInfo: PropTypes.string.isRequired,
  turnInfo: PropTypes.string.isRequired,
  nextPlayerTurn: PropTypes.string.isRequired,
};

const Square = ({ number, p1Score, p2Score }) => {
  const p1Id = p1Score === number ? 'p1-Circle' : '';
  const p2Id = p2Score === number ? 'p2-Circle' : '';
  const ladder = ladderKeys.includes(number.toString()) ? `(+${ladders[number.toString()]})` : null;
  const snake = snakesKeys.includes(number.toString()) ? `(-${snakes[number.toString()]})` : null;

  return (
    <div className="square" id={number} key={number}>
      <div id={p2Id} />
      <p>{number}<b>{ladder}{snake}</b></p>
      <div id={p1Id} />
    </div>
  );
};

Square.propTypes = {
  number: PropTypes.number.isRequired,
  p1Score: PropTypes.number.isRequired,
  p2Score: PropTypes.number.isRequired,
};

const Row = ({ squares }) => (
  <div className="board-row">
    {squares}
  </div>
);

Row.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const Board = ({ p1Score, p2Score }) => {
  const grid = [];
  let number = 100;
  if (window.screen.width > 800) {
    for (let i = 0; i < 10; i += 1) {
      grid.push([]);
      for (let k = 0; k < 10; k += 1) {
        grid[i].push(<Square number={number} key={k} p1Score={p1Score} p2Score={p2Score} />);
        number -= 1;
      }
    }
  } else {
    for (let i = 0; i < 25; i += 1) {
      grid.push([]);
      for (let k = 0; k < 4; k += 1) {
        grid[i].push(<Square number={number} key={k} p1Score={p1Score} p2Score={p2Score} />);
        number -= 1;
      }
    }
  }
  return grid.map((arr, index) => <Row squares={arr} key={index} />)
};

Board.propTypes = {
  p1Score: PropTypes.number.isRequired,
  p2Score: PropTypes.number.isRequired,
};

class SnakesAndLadders extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      p1Turn: true,
      p1Score: 1,
      p2Score: 1,
      rollDiceInfo: '',
      turnInfo: '',
      nextPlayerTurn: 'Player 1, you\'re up first',
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    const rndNum = Math.floor((Math.random() * 12) + 1);
    const p1SandlCheck = (this.state.p1Score + rndNum).toString();
    const p2SandlCheck = (this.state.p2Score + rndNum).toString();

    const playerInfoStateObj = (player, condition) => {
      if (condition === 'gt100') {
        return {
          turnInfo: `Sorry ${player}, you rolled a number that would move you above 100, therefore you stay in the same position`,
        };
      }
      if (condition === 'playerHasWon') {
        return {
          p1Turn: true,
          p1Score: 1,
          p2Score: 1,
          rollDiceInfo: '',
          turnInfo: '',
          nextPlayerTurn: 'Player 1, you\'re up first',
        };
      }
      if (condition === 'ladder') {
        if (player === 'Player 1') {
          return {
            p1Score: (this.state.p1Score + rndNum) + ladders[p1SandlCheck],
            turnInfo: `Player 1! You landed on a ladder and moved up ${ladders[p1SandlCheck]} places`,
          };
        } return {
          p2Score: (this.state.p2Score + rndNum) + ladders[p2SandlCheck],
          turnInfo: `Player 2! You landed on a ladder and moved up ${ladders[p2SandlCheck]} places`,
        };
      }
      if (condition === 'snake') {
        if (player === 'Player 1') {
          return {
            p1Score: (this.state.p1Score + rndNum) - snakes[p1SandlCheck],
            turnInfo: `Oh No Player 1! You landed on a snake and moved down ${snakes[p1SandlCheck]} places`,
          };
        } return {
          p2Score: (this.state.p2Score + rndNum) - snakes[p2SandlCheck],
          turnInfo: `Oh No Player 2! You landed on a snake and moved down ${snakes[p2SandlCheck]} places`,
        };
      }
    };

    if (this.state.p1Turn) {

      this.setState({
        p1Turn: false,
        rollDiceInfo: `Player 1, you rolled ${rndNum}`,
        turnInfo: '',
        nextPlayerTurn: 'Player 2, it\'s your turn next...',
      });

      if ((this.state.p1Score + rndNum) > 100) {
        this.setState(playerInfoStateObj('Player 1', 'gt100'));

      } else if ((this.state.p1Score + rndNum) === 100) {
        alert(`Congratulations Player 1 you rolled ${rndNum} and landed on 100. You've Won!!!`)

        this.setState(playerInfoStateObj(null, 'playerHasWon'));

      } else if (ladderKeys.includes(p1SandlCheck)) {
        this.setState(playerInfoStateObj('Player 1', 'ladder'));

      } else if (snakesKeys.includes(p1SandlCheck)) {
        this.setState(playerInfoStateObj('Player 1', 'snake'));
      } else {
        this.setState({
          p1Score: this.state.p1Score + rndNum,
        });
      }
    } else {

      this.setState({
        p1Turn: true,
        rollDiceInfo: `Player 2, you rolled ${rndNum}`,
        turnInfo: '',
        nextPlayerTurn: 'Player 1, it\'s your turn next...',
      });

      if ((this.state.p2Score + rndNum) > 100) {
        this.setState(playerInfoStateObj('Player 2', 'gt100'));

      } else if ((this.state.p2Score + rndNum) === 100) {
        alert(`Congratulations Player 2 you rolled ${rndNum} and landed on 100. You've Won!!!`);

        this.setState(playerInfoStateObj(null, 'playerHasWon'));
      } else if (ladderKeys.includes(p2SandlCheck)) {
        this.setState(playerInfoStateObj('Player 2', 'ladder'));
      } else if (snakesKeys.includes(p2SandlCheck)) {
        this.setState(playerInfoStateObj('Player 2', 'snake'));
      } else {
        this.setState({
          p2Score: this.state.p2Score + rndNum,
        });
      }
    }
  }

  render() {
    return (
      <div id="sandl-container">
        <Players
          rollDice={this.rollDice}
          diceInfo={this.state.rollDiceInfo}
          turnInfo={this.state.turnInfo}
          nextPlayerTurn={this.state.nextPlayerTurn}
        />
        <div id="board">
          <Board p1Score={this.state.p1Score} p2Score={this.state.p2Score} />
        </div>
      </div>
    );
  }
}

export default SnakesAndLadders;
