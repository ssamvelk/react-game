import React, { useEffect, useState } from 'react';

function Controls() {
  // eslint-disable-next-line prefer-const
  let [timer, setTimer] = useState(0);

  useEffect(() => {
    // console.log(timer);
    document.title = `${timer}`;
  });

  return (
    <div className="TicTacToe__controls" onClick={() => setTimer(timer + 1)}>
      <h1>{`Controls: ${timer}`}</h1>
    </div>
  );
}

export default Controls;
