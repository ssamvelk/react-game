/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Board from './Board';
// import Controls from './Controls';
import calculateWinner from './calculateWinner';
// import Square from './Square';

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
};

class TicTacToe extends Component<{}, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        lastClick: null,
      }],
      xIsNext: true,
      stepNumber: 0,
      len: 3,
    };
  }

  handleClick: (i: number) => void = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    // const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
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
      const win = this.state.xIsNext ? 'X' : 'O';
      status = `Следующий ход: ${win}`;
    }

    return (
      <main className="TicTacToe">
        {/* <Controls /> */}
        <div className="TicTacToe__game">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            len={this.state.len}
          />
        </div>
        <div className="TicTacToe__info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </main>
    );
  }
}

export default TicTacToe;
