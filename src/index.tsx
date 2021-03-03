import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Board from './components/tic-tac-toe/Board';
import Rules from './components/tic-tac-toe/Rules';
import Statistic from './components/tic-tac-toe/Statistic';

import App from './components/App';
import TicTacToe from './components/tic-tac-toe/TicTacToe';

function Error() { return (<h1>Error Error Error Error Error</h1>); }

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/react-game/">
          <TicTacToe />
        </Route>
        <Route path="/react-game/rules" component={Rules} />
        <Route path="/react-game/statistic" component={Statistic} />
        <Route path="*" component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
