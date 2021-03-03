import React from 'react';
import Storage from './extra/store';

const Statistic = () => (
  <main className="Statistic">
    <h1 className="Statistic__title">Статистика</h1>
    <ul className="Statistic__list">
      <li className="Statistic__item">
        <h3>Предпочтение иконок</h3>
        <ul className="Statistic__inner-list">
          <li className="Statistic__inner-item_icons">
            <span>{`[X, O] - ${Storage.getIcon(0)}`}</span>
            <span>{`[😀, 😪] - ${Storage.getIcon(1)}`}</span>
            <span>{`[🧔, 👽] - ${Storage.getIcon(2)}`}</span>
            <span>{`[🌼, 💩] - ${Storage.getIcon(3)}`}</span>
          </li>
        </ul>
      </li>
      <li className="Statistic__item">
        <h3>Поле 3 на 3</h3>
        <ul className="Statistic__inner-list">
          <li>
            {`Всего игр сыграно: ${Storage.getField('all', 3)}`}
          </li>
          <li>
            {`Побед: ${Storage.getField('win', 3)}`}
          </li>
          <li>
            {`Проигрышей: ${Storage.getField('loose', 3)}`}
          </li>
          <li>
            {`Ничья: ${Storage.getField('tie', 3)}`}
          </li>
        </ul>
      </li>
      <li className="Statistic__item">
        <h3>Поле 4 на 4</h3>
        <ul className="Statistic__inner-list">
          <li>
            {`Всего игр сыграно: ${Storage.getField('all', 4)}`}
          </li>
          <li>
            {`Побед: ${Storage.getField('win', 4)}`}
          </li>
          <li>
            {`Проигрышей: ${Storage.getField('loose', 4)}`}
          </li>
          <li>
            {`Ничья: ${Storage.getField('tie', 4)}`}
          </li>
        </ul>
      </li>
      <li className="Statistic__item">
        <h3>Поле 5 на 5</h3>
        <ul className="Statistic__inner-list">
          <li>
            {`Всего игр сыграно: ${Storage.getField('all', 5)}`}
          </li>
          <li>
            {`Побед: ${Storage.getField('win', 5)}`}
          </li>
          <li>
            {`Проигрышей: ${Storage.getField('loose', 5)}`}
          </li>
          <li>
            {`Ничья: ${Storage.getField('tie', 5)}`}
          </li>
        </ul>
      </li>
      <li className="Statistic__item">
        <h3>Поле 6 на 6</h3>
        <ul className="Statistic__inner-list">
          <li>
            {`Всего игр сыграно: ${Storage.getField('all', 6)}`}
          </li>
          <li>
            {`Побед: ${Storage.getField('win', 6)}`}
          </li>
          <li>
            {`Проигрышей: ${Storage.getField('loose', 6)}`}
          </li>
          <li>
            {`Ничья: ${Storage.getField('tie', 6)}`}
          </li>
        </ul>
      </li>
    </ul>
  </main>
);

export default Statistic;
