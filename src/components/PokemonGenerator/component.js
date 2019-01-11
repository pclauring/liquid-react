import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PokemonCard from '../PokemonCard'
import './PokemonGenerator.css';

//Pokemon Api Wrapper https://github.com/PokeAPI/pokeapi-js-wrapper
const Pokedex = require('pokeapi-js-wrapper');

const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000 // 5s
}

const P = new Pokedex.Pokedex(options);

class Form extends Component {


  state = { pokemonName: '' }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.pokemonName !== undefined) {
      var pokemonRequest = this.state.pokemonName.toLowerCase();
      P.getPokemonByName(pokemonRequest)
        .then(resp => {
          console.log(resp);
          this.props.onSubmit(resp);
        });
    }
  };

  render() {
    return (
      <Grid container spacing={24} className="form-container-grid" >
        <Grid item xs={6}>
          <Paper className="pokemon-search-bar">
            <form onSubmit={this.handleSubmit}>
              <Input type="text"
                onChange={(event) => this.setState({ pokemonName: event.target.value })}
                placeholder="Pokemon Name" />
              <Button type="submit" variant="text" className="pokemon-submit-button">Add Pokemon</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

    )
  };
};

const CardList = (props) => {
  return (
    <div>
      <Grid container spacing={40} className="card-list">
        {props.cards.map(card => <PokemonCard key={card.name} {...card} />)}
      </Grid>
    </div>
  );
};

class PokemonGenerator extends React.Component {
  state = { cards: [] };

  addNewCard = (cardInfo) => {
    this.setState({ cards: [cardInfo] });

    // prevState => ({
    // cards: prevState.cards.concat(cardInfo)
    // }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    )
  };
};


export default PokemonGenerator;
