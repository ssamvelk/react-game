/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Board from './Board';
// import Controls from './Controls';
import { calculateWinner, calcDifficultWinner } from './calculateWinner';
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
  volume: boolean,
};

class TicTacToe extends Component<{}, StateType> {
  mainRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      history: [{ // массив [{}, {}]
        squares: Array(9).fill(null),
        lastClick: null,
      }],
      xIsNext: true,
      stepNumber: 0,
      len: LENS[0],
      symbols: SYMBOLS[3],
      volume: true,
    };
  }

  handleFullscreenClick: (e: React.MouseEvent) => void = (e) => {
    // console.log('e ', (e.target as HTMLElement).classList);

    if (!document.fullscreenElement) {
      (this.mainRef.current as HTMLElement).requestFullscreen();
      (e.target as HTMLElement).classList.remove('TicTacToe__controls-button_disable');
    } else if (document.fullscreenEnabled) {
      document.exitFullscreen();
      (e.target as HTMLElement).classList.add('TicTacToe__controls-button_disable');
    }
  };

  handleSymbolsChange: (arg0: number) => void = (symbolSet) => {
    this.setState({
      symbols: SYMBOLS[symbolSet],
    });
  };

  handleLenChange: (len: number) => void = (len) => {
    this.setState({
      len,
      history: [{ // массив [{}, {}]
        squares: Array(len ** 2).fill(null),
        lastClick: null,
      }],
      stepNumber: 0,
    });
    // this.clearHistory();
  };

  handleVolumeChange: (volume: boolean) => void = (volume) => {
    this.setState({
      volume,
    });
  };

  handleClick: (i: number) => void = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    const squares = [...current.squares];
    // const squares = this.state.squares.slice();

    if (calculateWinner(squares, this.state.len) || squares[i]) return;

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
    console.log('current ', current.squares);
  };

  jumpTo: (number) => void = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  };

  clearHistory: () => void = () => {
    const { len } = this.state;

    this.setState({
      history: [{ // массив [{}, {}]
        squares: Array(len ** 2).fill(null),
        lastClick: null,
      }],
    });
  };
  // componentDidUpdate = () => {  };

  render() {
    const { history } = this.state;
    // console.dir(this.state.history);
    const current = history[this.state.stepNumber];
    // const lastClick = current.lastClick;
    const winner = calculateWinner(current.squares, this.state.len);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Перейти к ходу #${move}`
        : 'К началу игры';

      // console.log('step ', step);
      const stepClick = step.squares[step.lastClick!];

      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} type="button">{desc}</button>
          <span>
            {
                (this.state.history[move].lastClick !== null)
                  ? ` клик игрока ${stepClick} в позиции (${(this.state.history[move].lastClick!) % 3}, ${Math.floor((this.state.history[move].lastClick!) / 3)})`
                  : ''
              }
          </span>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Победил ${winner}`;
    } else if (this.state.stepNumber === this.state.len ** 2) {
      status = 'Ничья';
    } else {
      const win = this.state.xIsNext ? this.state.symbols[0] : this.state.symbols[1];
      status = `Ход игрока: ${win}`;
    }

    return (
      <main className="TicTacToe" ref={(this.mainRef as React.RefObject<HTMLElement>)}>
        <div className="TicTacToe__game">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            len={this.state.len}
            lenClick={this.handleLenChange}
            symbolsChange={this.handleSymbolsChange}
            fullscreenClick={this.handleFullscreenClick}
            volume={this.state.volume}
            volumeChange={this.handleVolumeChange}
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
