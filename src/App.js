import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Components/home';
import Giphy from './Components/giphy';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/giphy-api-seach' component={Giphy} />
      </Router>
    </div>
  );
}

export default App;
