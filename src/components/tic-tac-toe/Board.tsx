/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Square from './Square';
import Controls from './Controls';

import './TicTacToe.scss';

type BoardProps = {
  squares: Array<string | null>;
  onClick: (number) => void;
  len: number;
};
// { squares: Array<string | null>, onClick: (number) => void }

class Board extends Component<BoardProps, {}> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    len: 3,
  };
  // static len = 3;

  constructor(props: BoardProps) {
    super(props);
    this.state = {};
  }

  renderSquare = (i:number) => (
    <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      key={i}
    />
  )
  ;

  render = () => {
    const { len } = this.props;
    // console.log('this.props: ', this.props);
    // console.log('len: ', len);

    const arr: Array<JSX.Element> = [];

    for (let i = 0; i < len; i += 1) {
      const items: Array<JSX.Element> = [];
      for (let j = 0; j < len; j += 1) {
        // console.log(i * 3 + j);
        items.push(this.renderSquare(i * len + j));
      }
      arr.push(
        <div className="TicTacToe__row" key={i}>
          {[...items]}
        </div>,
      );
    }
    return (
      <>
        <Controls />
        <div className="TicTacToe__board">
          {[arr]}
        </div>
      </>
    );
  };
}

export default Board;
