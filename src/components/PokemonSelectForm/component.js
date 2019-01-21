import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Select from 'react-select';

//List of pokemon in the game as a JSON Object
const options = require('../PokemonGenerator/PokemonFullList').map((option, index) => ({
  value: index + 1,
  label: option.label,
}));

//Pokemon Api Wrapper https://github.com/PokeAPI/pokeapi-js-wrapper
const Pokedex = require('pokeapi-js-wrapper');

const pokemonOptions = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000 // 5s
}

const P = new Pokedex.Pokedex(pokemonOptions);

class PokemonSelectForm extends Component {
  state = {
    pokemonName: '',
    selectedOption: null
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.selectedOption.value !== null) {
      var pokemonRequest = this.state.selectedOption.value;
      P.getPokemonByName(pokemonRequest)
        .then(resp => {
          console.log(resp);
          this.props.onSubmit(resp);
        });
    }
  };

  render() {

    const { selectedOption } = this.state;

    return (
            <form onSubmit={this.handleSubmit} className="pokemoncard-form">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder="Enter a Pokemon Name..."
              />
              <hr />
              <Button type="submit" variant={this.props.buttonVariant} className="pokemon-submit-button">{this.props.buttonTitle}</Button>
            </form>
    )
  };
};

export default PokemonSelectForm;
