/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Square from './Square';
import Controls from './Controls';

import './TicTacToe.scss';

type BoardProps = {
  squares: Array<string | null>;
  onClick: (arg0: number) => void;
  len: number;
  lenClick: (arg0: number) => void;
  volume: boolean;
  symbolsChange: (arg0: number) => void;
  fullscreenClick: (e: React.MouseEvent) => void;
  volumeChange: (volume: boolean) => void;
};

// { audioObj: HTMLAudioElement, isWinner: boolean, volume: boolean }
type BoardState = {
  audioObj: HTMLAudioElement;
  isWinner: boolean;
};
// { squares: Array<string | null>, onClick: (number) => void }

class Board extends Component<BoardProps, BoardState> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    len: 3,
    volume: true,
  };
  // static len = 3;

  constructor(props: BoardProps) {
    super(props);
    this.state = {
      audioObj: new Audio('/src/assets/space.mp3'),
      isWinner: false,
    };
  }

  renderSquare = (i:number) => (
    <Square
      value={this.props.squares[i]}
      onClick={(e) => {
        // const audioObj = new Audio('/src/assets/space.mp3');
        if ((e.target as HTMLButtonElement).innerHTML === '') {
          if (this.props.volume) {
            this.state.audioObj.currentTime = 0;
            this.state.audioObj.play();
          }
          const timer = setTimeout(() => {
            (e.target as HTMLButtonElement).classList.add('blink');
          }, 0);

          setTimeout(() => {
            (e.target as HTMLButtonElement).classList.remove('blink');
            clearTimeout(timer);
          }, 500);
        }

        return this.props.onClick(i);
      }}
      key={i}
    />
  )
  ;

  render = () => {
    const { len } = this.props;

    const squareArr: Array<JSX.Element> = [];

    for (let i = 0; i < len; i += 1) {
      const items: Array<JSX.Element> = [];
      for (let j = 0; j < len; j += 1) {
        // console.log(i * 3 + j);
        items.push(this.renderSquare(i * len + j));
      }
      squareArr.push(
        <div className="TicTacToe__row" key={i}>
          {[...items]}
        </div>,
      );
    }
    return (
      <>
        <Controls
          len={len}
          lenClick={this.props.lenClick}
          symbolsChange={this.props.symbolsChange}
          fullscreenClick={this.props.fullscreenClick}
          volumeChange={this.props.volumeChange}
          volume={this.props.volume}
        />
        <div className="TicTacToe__board">
          {[squareArr]}
        </div>
      </>
    );
  };
}

export default Board;
