import React, { Component } from 'react';
import axios from 'axios';
import bugicon from './bug-solid.svg';
import './App.css';
import ProfileCard from '../ProfileCard';
import Home from '../Home';
import { Col, Jumbotron, Button, Row, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div>
            <img width="50px" src={bugicon} className="App-logo" alt="logo" />
          </div>
        </Jumbotron>
        <Home />
      </div>
    );
  }
}

export default App;

