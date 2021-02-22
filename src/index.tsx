import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

// ReactDOM.render(<App />, document.querySelector('#root'));

function Home() { return (<h1>Home</h1>); }
function Rules() { return (<h1>Rules</h1>); }
// function Posts() { return (<h1>Posts</h1>); }
// function Post() { return (<h1>Post</h1>); }
function Error() { return (<h1>Error Error Error Error Error</h1>); }
function Statistic() {
  return (
    <ul>
      <li>Statistic</li>
      <li>Statistic2</li>
    </ul>
  );
}

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/statistic" component={Statistic} />
        {/* <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} /> */}
        <Route path="*" component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
