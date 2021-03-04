/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Board from './Board';
import calculateWinner from './extra/calculateWinner';
import { SYMBOLS, LENS } from './constants';
import Storage from './extra/store';
import winVolume from '../../assets/win.mp3';
import looseVolume from '../../assets/loose.wav';

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
  symbolsCount: number,
  volume: boolean,
  audioWin: HTMLAudioElement;
  audioLoose: HTMLAudioElement;
  isWinner: boolean;
};

class TicTacToe extends Component<{}, StateType> {
  mainRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      // history: [{
      //   squares: Array(9).fill(null),
      //   lastClick: null,
      // }],
      history: Storage.getGameHistory(),
      xIsNext: !!(((Storage.getGameHistory().length - 1) % 2) === 0),
      // xIsNext: true,
      isWinner: false,
      stepNumber: Storage.getGameHistory().length - 1,
      // stepNumber: 0,
      len: Storage.getLen(),
      // len: LENS[0],
      symbols: SYMBOLS[0],
      symbolsCount: 0,
      volume: true,
      audioWin: new Audio(winVolume),
      audioLoose: new Audio(looseVolume),
    };
  }

  handleFullscreenClick: (e: React.MouseEvent) => void = (e) => {
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
      symbolsCount: symbolSet,
    });
    this.clearHistory();
    Storage.setIcon(Storage.getIcon(this.state.symbolsCount) + 1, this.state.symbolsCount);
  };

  handleLenChange: (len: number) => void = (len) => {
    Storage.saveGameHistory([{
      squares: Array(len ** 2).fill(null),
      lastClick: null,
    }]);
    Storage.setLen(len);
    this.setState({
      len,
      history: Storage.getGameHistory(),
      // history: [{ // массив [{}, {}]
      //   squares: Array(len ** 2).fill(null),
      //   lastClick: null,
      // }],
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
    Storage.saveGameHistory(history.concat([{
      squares,
      lastClick: i,
    }]));

    this.setState({
      // history: history.concat([{
      //   squares,
      //   lastClick: i,
      // }]),
      history: Storage.getGameHistory(),
      xIsNext: !!(((Storage.getGameHistory().length - 1) % 2) === 0),
      // xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
    // console.log('lastClick ', this.state.lastClick, i);
    // console.log('current ', current.squares);
  };

  jumpTo: (arg0: number) => void = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  };

  clearHistory: () => void = () => {
    const { len } = this.state;
    const squares = Array(len ** 2).fill(null);
    this.jumpTo(0);
    Storage.saveGameHistory([{
      squares,
      lastClick: null,
    }]);
    this.setState({
      history: Storage.getGameHistory(),
      xIsNext: !!(((Storage.getGameHistory().length - 1) % 2) === 0),
    });
  };

  checkWinner: (winner: string| null) => void = (winner) => {
    if (winner) this.setState({ isWinner: true });
  };

  // componentDidMount() { }

  render() {
    // const history = Storage.getGameHistory();
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, this.state.len);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Перейти к ходу #${move}`
        : 'К началу игры';

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
      if (this.state.volume) {
        if (this.state.xIsNext) {
          this.state.audioLoose.currentTime = 0;
          this.state.audioLoose.play();
          Storage.setField(Storage.getField('loose', this.state.len) + 1, 'loose', this.state.len);
        } else {
          this.state.audioWin.currentTime = 0;
          this.state.audioWin.play();
          Storage.setField(Storage.getField('win', this.state.len) + 1, 'win', this.state.len);
        }
      }
      Storage.setField(Storage.getField('all', this.state.len) + 1, 'all', this.state.len);
    } else if (this.state.stepNumber === this.state.len ** 2) {
      status = 'Ничья';
      Storage.setField(Storage.getField('tie', this.state.len) + 1, 'tie', this.state.len);
    } else {
      const win = this.state.xIsNext ? this.state.symbols[0] : this.state.symbols[1];
      status = `Ход игрока: ${win}`;
    }

    console.log('---------------');
    // console.log('moves ', moves);
    console.log('history ', this.state.history);
    // console.log('---------------');

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
            isWinner={this.state.isWinner}
            newGameClick={this.clearHistory}
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
