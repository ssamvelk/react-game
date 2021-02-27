/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

function Controls() {
  // eslint-disable-next-line prefer-const
  let [timer, setTimer] = useState(0);
  // let [controlClick, setControlClick] = useState();

  useEffect(() => {
    // console.log(timer);
    document.title = `${timer}`;
  });

  return (
    <div className="TicTacToe__controls" onClick={() => setTimer(timer + 1)}>
      {/* <h1>{`Controls: ${timer}`}</h1> */}
      <label className="TicTacToe__controls-len">
        {' '}
        Len:
        <select>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </label>
      <img className="TicTacToe__controls-button" src="../../assets/images/volume.png" alt="volume" width="30px" />
      <img className="TicTacToe__controls-button" src="../../assets/images/robot.png" alt="robot" width="40px" />
    </div>
  );
}

export default Controls;
