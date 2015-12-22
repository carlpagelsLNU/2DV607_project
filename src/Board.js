import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Test from './Test';

export default class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [posX, posY] = this.props.imagePosition;
    const piece = (x === posX && y === posY) ?
      <Test /> :
      null;

    return (
      <div key={i}
           style={{ width: '25%', height: '25%' }}
            onClick="handleSquareClick(this)">
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 16; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '50%',
        height: '50%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

function handleSquareClick(square) {
  square.style.background="#000000";
}

Board.propTypes = {
  imagePosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};