/* eslint-disable max-len */
import React from 'react';

import bgImage from '../../assets/images/220px-Xo_game.svg.png';
import restartImage from '../../assets/images/restart.png';
import volumeImage from '../../assets/images/volume.png';
import robotImage from '../../assets/images/robot.png';
import fullscreenImage from '../../assets/images/fullscreen.png';

const Rules = () => (
  <main className="Rules">
    <h1>Крестики нолики</h1>
    <p>
      Кре́стики-но́лики — логическая игра между двумя противниками на квадратном поле 3 на 3 клетки или бо́льшего размера (вплоть до «бесконечного поля»). Один из игроков играет «крестиками», второй — «ноликами».
    </p>
    <h2>Правила игры</h2>
    <div>
      <p>
        Игроки по очереди ставят на свободные клетки поля 3х3 знаки (один всегда крестики, другой всегда нолики). Первый, выстроивший в ряд 3 своих фигуры по вертикали, горизонтали или диагонали, выигрывает. Первый ход делает игрок, ставящий крестики.
      </p>
      <div className="Rules__win-image">
        <img src={bgImage} alt="win" />
        {/* <img src="assets/images/220px-Xo_game.svg.png" alt="win" /> */}
        <span>Выигранная партия в крестики-нолики</span>
      </div>
    </div>

    <hr />

    <div className="Rules__controls">
      <div>
        <h2>Контролы</h2>
        <ul className="Rules__list">
          <li>
            <img className="TicTacToe__controls-button" src={restartImage} alt="restart" width="50px" />
            - Начать новую игру;
          </li>
          <li>
            <img className="TicTacToe__controls-button" src={volumeImage} alt="volume" width="50px" />
            - Вкл\Выкл звуковое сопровождение;
          </li>
          <li>
            <img className="TicTacToe__controls-button" src={robotImage} alt="robot" width="50px" />
            - Вкл\Выкл игрового противника;
          </li>
          <li>
            <img className="TicTacToe__controls-button" src={fullscreenImage} alt="fullscreen" width="50px" />
            - Вкл\Выкл fullscreen режим;
          </li>
        </ul>
      </div>
      <div>
        <h2>Горячие клавиши</h2>
        <ul className="Rules__list">
          <li>↑ - Движение вверх по полю;</li>
          <li>⟶ - Движение вправо по полю;</li>
          <li>↓ - Движение вниз по полю;</li>
          <li>⟵ - Движение влево по полю;</li>
          <li>Enter - Поставить крестик в клетку;</li>
        </ul>
      </div>
    </div>
  </main>
);

export default Rules;
