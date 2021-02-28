/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Board from './Board';
// import Controls from './Controls';
import calculateWinner from './calculateWinner';
// import Square from './Square';
import { SYMBOLS, LENS } from './constants';

import './TicTacToe.scss';

type HistoryType = {
  squares: Array<string | null>,
  lastClick: number | null,
};

type StateType = {
  history: HistoryType[],
  xIsNext: boolean,
  stepNumber: number,
  len: number,
  symbols: [string, string],
  volume: boolean
};

class TicTacToe extends Component<{}, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ // массив [{}, {}]
        squares: Array(9).fill(null),
        lastClick: null,
      }],
      xIsNext: true,
      stepNumber: 0,
      len: LENS[2],
      symbols: SYMBOLS[3],
      volume: true,
    };
  }

  handleLenChange: (len: number) => void = (len: number) => {
    this.setState({
      len,
    });
  };

  handleClick: (i: number) => void = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    // const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? this.state.symbols[0] : this.state.symbols[1];
    // squares[i] = this.state.xIsNext ? 'X' : 'O';
    // console.log('squares[i] ', squares[i]);

    this.setState({
      history: history.concat([{
        squares,
        lastClick: i,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
    // console.log('lastClick ', this.state.lastClick, i);
  };

  jumpTo: (number) => void = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  };

  render() {
    const { history } = this.state;
    // console.dir(this.state.history);
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // const lastClick = current.lastClick;

    const moves = history.map((step, move) => {
      const desc = move
        ? `Перейти к ходу #${move}`
        : 'К началу игры';

      // console.log('step ', step);
      const qq = step.squares[step.lastClick!];

      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} type="button">{desc}</button>
          <span>
            {
                (this.state.history[move].lastClick !== null)
                  ? `клик игрока ${qq} в позиции (${(this.state.history[move].lastClick!) % 3}, ${Math.floor((this.state.history[move].lastClick!) / 3)})`
                  : ''
              }
          </span>
        </li>
      );
    });

    let status;

    if (winner) {
      status = `Победил ${winner}`;
    } else {
      const win = this.state.xIsNext ? this.state.symbols[0] : this.state.symbols[1];
      status = `Ход игрока: ${win}`;
    }

    return (
      <main className="TicTacToe">
        <div className="TicTacToe__game">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            len={this.state.len}
            lenClick={this.handleLenChange}
          />
        </div>
        <div className="TicTacToe__info">
          <div className="TicTacToe__info-status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </main>
    );
  }
}

export default TicTacToe;
