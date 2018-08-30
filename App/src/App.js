import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Home from './components/Home';
import SnakesAndLadders from './components/Snakesandladders';
import Weather from './components/Weather';
import RndQuote from './components/RndQuote';
import Bookmark from './components/Bookmark';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/snakesandladders" component={SnakesAndLadders} />
        <Route path="/weather" component={Weather} />
        <Route path="/randomquote" component={RndQuote} />
        <Route path="/bookmark" component={Bookmark} />
      </Switch>
    </div>
  </Router>
);

export default App;
