import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Messages from './components/Messages'

import './reset.css'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
          <div className="border">
            <Messages />
          </div>
        </div>

      </HashRouter>
    );
  }
}

export default App;
