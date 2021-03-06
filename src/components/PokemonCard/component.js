import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import PokemonType from '../PokemonType';
import PokemonSelectForm from '../PokemonSelectForm';
import orange from '@material-ui/core/colors/orange';
import lime from '@material-ui/core/colors/lime';
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import cyan from '@material-ui/core/colors/cyan';
import deepPurple from '@material-ui/core/colors/deepPurple';
import yellow from '@material-ui/core/colors/yellow';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import lightBlue from '@material-ui/core/colors/lightBlue';
import brown from '@material-ui/core/colors/brown';
import deepOrange from '@material-ui/core/colors/deepOrange';
import indigo from '@material-ui/core/colors/indigo';
import { Radar } from 'react-chartjs-2';
import './PokemonCard.css';
import { Paper } from '@material-ui/core';
import TypeEffectivenessSection from '../TypeEffectivenessSection/component';


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

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const mapAbilities = (array) => {

  var statLabels = [];
  array.forEach(element => {
    statLabels.push(element.stat.name.toUpperCase());
  });

  return statLabels;
};

const insertComparisonData = (prevData, newData) => {
      if(prevData.length > 1){
        prevData[1] = newData;
        return prevData;
      } else {
        return prevData.concat(newData);
      }
}

const mapStatValues = (array) => {
  var statValues = [];
  array.forEach(element => {
    statValues.push(element.base_stat);
  });

  return statValues;
};

const pushTypes = (array) => {
  var types = [];
  array.forEach(element => {
    types.push(element.type.name.toUpperCase());
  });

  return types;
}

const getType = (type) => {
  if (type === 'FIRE') { return { color: orange[50], secondaryColor: orange[300] }; }
  else if (type === 'DARK') { return { color: grey[300], secondaryColor: grey[600] }; }
  else if (type === 'FAIRY') { return { color: pink[50], secondaryColor: pink[400] }; }
  else if (type === 'ICE') { return { color: lightBlue[50], secondaryColor: lightBlue[300] }; }
  else if (type === 'ROCK') { return { color: brown[100], secondaryColor: brown[400] }; }
  else if (type === 'FIGHTING') { return { color: deepOrange[100], secondaryColor: deepOrange[400] }; }
  else if (type === 'GROUND') { return { color: orange[100], secondaryColor: orange[400] }; }
  else if (type === 'POISON') { return { color: purple[100], secondaryColor: purple[400] }; }
  else if (type === 'DRAGON') { return { color: indigo[100], secondaryColor: indigo[400] }; }
  else if (type === 'GRASS') { return { color: green[50], secondaryColor: green[300] }; }
  else if (type === 'WATER') { return { color: blue[50], secondaryColor: blue[300] }; }
  else if (type === 'NORMAL') { return { color: grey[50], secondaryColor: grey[400] }; }
  else if (type === 'FLYING') { return { color: indigo[50], secondaryColor: indigo[300] }; }
  else if (type === 'PSYCHIC') { return { color: purple[50], secondaryColor: purple[300] }; }
  else if (type === 'BUG') { return { color: lime[50], secondaryColor: lime[300] }; }
  else if (type === 'STEEL') { return { color: blueGrey[50], secondaryColor: blueGrey[300] }; }
  else if (type === 'ELECTRIC') { return { color: yellow[50], secondaryColor: yellow[300] }; }
  else if (type === 'GHOST') { return { color: deepPurple[50], secondaryColor: deepPurple[300] }; }
}

class PokemonCard extends Component {

  state = {
    labels: mapAbilities(this.props.stats),

    types: pushTypes(this.props.types),
    datasets: [
      {
        label: this.props.name.toUpperCase(),
        backgroundColor: 'rgba(0, 0, 0, 0)',
        //borderColor: 'rgba(179,181,198,1)',
        // pointBackgroundColor: 'rgba(179,181,198,1)',
        // pointBorderColor: '#fff',
        borderColor: getType(pushTypes(this.props.types)[0]).secondaryColor,
        pointBackgroundColor: getType(pushTypes(this.props.types)[0]).color,
        pointBorderColor: getType(pushTypes(this.props.types)[0]).secondaryColor,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: mapStatValues(this.props.stats)
      }
    ]
  }

  componentDidMount() {
    this.getSpeciesInfo();
  }

  setGradient = (types) => {
    if (types.length >= 2) {
      return 'linear-gradient(to right ,' + getType(types[0]).color + ',' + getType(types[1]).color + ')'
    }
    else {
      return 'linear-gradient(to right ,' + getType(types[0]).color + ',' + getType(types[0]).secondaryColor + ')'
    }
  }

  getSpeciesInfo = () => {
    P.getPokemonSpeciesByName(this.props.name)
      .then(resp => {
        console.log(resp);
        this.setState({ speciesInfo: resp })
      });
  };

  addPokemonStats = (pokemon) => {
    this.setState(
      prevState => ({
        datasets: insertComparisonData(prevState.datasets,
          {
            label: pokemon.name.toUpperCase(),
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: getType(pushTypes(pokemon.types)[0]).secondaryColor,
            pointBackgroundColor: getType(pushTypes(pokemon.types)[0]).color,
            pointBorderColor: getType(pushTypes(pokemon.types)[0]).secondaryColor,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: mapStatValues(pokemon.stats)
          } ) 
        // prevState.datasets.concat(
      }));
  };

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
    return (
      <div>
        <Grid item xs={12} >
          <Card>
            <CardHeader
              title={capitalize(this.props.name)}
              subheader={'ID: ' + this.props.id}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              className="cardHeader"
            />
            <CardContent >
              <Grid container spacing={24} direction="row" justify="center" alignItems="center">
                {this.props.types.map(element => (
                  <Typography key={element.type.name} variant="subtitle1" color="textSecondary" align="center">
                    <PokemonType type={element.type.name.toUpperCase()} />
                  </Typography>
                ))}
              </Grid>
              <div className="sprite-container">
                <img width="75px" src={this.props.sprites.front_default} alt="sprite front" className="sprite-img" />
                <img width="75px" src={this.props.sprites.back_default} alt="sprite back" className="sprite-img" />
                <img width="75px" src={this.props.sprites.front_shiny} alt="sprite front shiny" className="sprite-img" />
                <img width="75px" src={this.props.sprites.back_shiny} alt="sprite back shiny" className="sprite-img" />
              </div>
              <Typography align="center">Weight: {this.props.weight}</Typography>
              <Radar data={this.state} />

            </CardContent>
            <CardActions>
              <Grid container spacing={24} direction="row" justify="center" alignItems="center">
                {/* <Button variant="contained" color="primary" onClick={this.handleInfoClick}>
                  Flavor Text
                  </Button> */}
                {this.state.speciesInfo &&
                  <div>
                    <Paper elevation={2} className="pokemon-card-action-paper" style={{ backgroundColor: getType(this.state.types[0]).color, background: this.setGradient(this.state.types) }}>
                      <Typography variant="overline" gutterBottom>Species Info: {this.state.speciesInfo.genera[2].genus}</Typography>
                      <Typography variant="overline" gutterBottom>Shape: {capitalize(this.state.speciesInfo.shape.name)}</Typography>
                      <Typography variant="overline" gutterBottom>Habitat: {capitalize(this.state.speciesInfo.habitat.name)}</Typography>
                      <Typography variant="overline" gutterBottom>Color: {capitalize(this.state.speciesInfo.color.name)}</Typography>
                      <Typography variant="overline" gutterBottom>Weight: {this.props.weight}</Typography>
                    </Paper>

                  </div>
                }
                <div className="add-stats-form">
                  <PokemonSelectForm onSubmit={this.addPokemonStats} buttonVariant={"outlined"} buttonTitle={"Compare Stats"} />
                </div>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
};


export default PokemonCard;
