import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Board from './components/tic-tac-toe/Board';

import App from './components/App';
import TicTacToe from './components/tic-tac-toe/TicTacToe';

// ReactDOM.render(<App />, document.querySelector('#root'));

function Home() { return (<h1>Home</h1>); }
function Rules() { return (<h1>Rules</h1>); }
// function Posts() { return (<h1>Posts</h1>); }
// function Post() { return (<h1>Post</h1>); }
function Error() { return (<h1>Error Error Error Error Error</h1>); }
function Statistic() {
  return (
    <ul>
      <li>Statistic 1</li>
      <li>Statistic 2</li>
      <li>Statistic 3</li>
      <li>Statistic 4</li>
      <li>Statistic 5</li>
      <li>Statistic 6</li>
    </ul>
  );
}

// const Q = <TicTacToe squares={Array(9).fill(null)} onClick={() => {}} />;

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/">
          <TicTacToe />
        </Route>
        <Route path="/rules" component={Rules} />
        <Route path="/statistic" component={Statistic} />
        {/* <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} /> */}
        <Route path="*" component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
