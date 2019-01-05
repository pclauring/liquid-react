import React, { Component } from 'react';
import './App.css';
import Home from '../Home';
import Form from '../Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Home />
      </div>
    );
  }
}

export default App;

