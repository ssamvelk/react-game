import React from 'react';

type SquareType = {
  value: string | null,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  // _key: number,
};

const Square = ({ value = null, onClick }:SquareType) => (
  <button className="TicTacToe__square" onClick={onClick} type="button">
    {value}
  </button>
);

export default Square;
