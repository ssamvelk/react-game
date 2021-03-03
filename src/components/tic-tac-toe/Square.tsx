import React, { useEffect } from 'react';

type SquareType = {
  value: string | null,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  // _key: number,
};

const Square = ({ value = null, onClick }:SquareType) => {
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    // console.log(`эффект ${value}`);
  });

  return (
    <button className="TicTacToe__square" onClick={onClick} type="button">
      {value}
    </button>
  );
};

export default Square;
