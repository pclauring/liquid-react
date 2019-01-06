import React, { Component } from 'react';
import './App.css';
import Home from '../Home';
import Form from '../PokemonGenerator';
import PokemonGenerator from '../PokemonGenerator';

class App extends Component {
  render() {
    return (
      <div>
        <PokemonGenerator />
        <Home />
      </div>
    );
  }
}

export default App;

