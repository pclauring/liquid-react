import React, { Component } from 'react';
import bugicon from './bug-solid.svg';
import './App.css';
import './bootstrap.min.css';
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
        <img src={bugicon} className="App-logo" alt="logo" />
        </Jumbotron>
        <Button size="lg">Launch</Button>
      </div>
    );
  }
}

export default App;

