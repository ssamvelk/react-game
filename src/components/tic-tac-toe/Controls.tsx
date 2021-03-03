/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { SYMBOLS } from './constants';

type ControlsProps = {
  len: number;
  lenClick: (arg0: number) => void;
  symbolsCount?: number;
  symbolsChange: (arg0: number) => void;
  fullscreenClick: (e: React.MouseEvent) => void;
  volume: boolean;
  volumeChange: (volume: boolean) => void;
  newGameClick: () => void;
};

function Controls({
  len, lenClick, symbolsCount, symbolsChange, fullscreenClick, volume, volumeChange, newGameClick,
}: ControlsProps) {
  // eslint-disable-next-line prefer-const
  // let [timer, setTimer] = useState(0);
  const [lenState, setLen] = useState(len);
  const [symbols, setSymbols] = useState(symbolsCount);
  const [volumeState, setVolume] = useState(volume);
  // console.log('props: symbols', symbols);

  // useEffect(() => {
  //   // console.log(timer);
  //   document.title = `${timer}`;
  // });

  return (
    <div
      className="TicTacToe__controls"
      // onClick={() => {
      //   // setTimer(timer + 1);
      //   // lenClick(lenState);
      // }}
    >
      {/* <h1>{`Controls: ${timer}`}</h1> */}
      <div className="TicTacToe__controls-options">
        <label className="TicTacToe__controls-icons">
          {'Icons:  '}
          <select
            value={symbols}
            onChange={(e) => { setSymbols(+e.target.value); symbolsChange(+e.target.value); }}
          >
            <option value="0">{`${SYMBOLS[0][0]}/${SYMBOLS[0][1]}`}</option>
            <option value="1">{`${SYMBOLS[1][0]}/${SYMBOLS[1][1]}`}</option>
            <option value="2">{`${SYMBOLS[2][0]}/${SYMBOLS[2][1]}`}</option>
            <option value="3">{`${SYMBOLS[3][0]}/${SYMBOLS[3][1]}`}</option>
          </select>
        </label>
        <label className="TicTacToe__controls-len">
          {'Len:  '}
          <select
            value={lenState}
            onChange={(e) => { setLen(+e.target.value); lenClick(+e.target.value); }}
          >
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
      </div>

      <img
        onClick={(e) => {
          newGameClick();
          (e.target as HTMLElement).classList.add('rotate');
          setTimeout(() => {
            (e.target as HTMLElement).classList.remove('rotate');
          }, 500);
        }}
        className="TicTacToe__controls-button"
        src="../../assets/images/restart.png"
        alt="restart"
        width="30px"
      />
      <img
        onClick={() => { volumeChange(!volumeState); setVolume(!volumeState); }}
        className={`TicTacToe__controls-button${volumeState ? '' : ' TicTacToe__controls-button_disable'}`}
        src="../../assets/images/volume.png"
        alt="volume"
        width="30px"
      />
      <img className="TicTacToe__controls-button TicTacToe__controls-button_disable" src="../../assets/images/robot.png" alt="robot" width="40px" />
      <img
        onClick={(e) => { fullscreenClick(e); }}
        className="TicTacToe__controls-button TicTacToe__controls-button_disable"
        src="../../assets/images/fullscreen.png"
        alt="fullscreen"
        width="30px"
      />
    </div>
  );
}

Controls.defaultProps = {
  symbolsCount: 0,
  // volume: true,
};

export default Controls;
