import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { Radar } from 'react-chartjs-2';
import './PokemonGenerator.css';

class Form extends Component {
  state = { userName: '' }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Event: Submit ", this.state.userName);
    // axios.get(`https://api.github.com/users/${this.state.userName}`)

    // axios.get(` https://pokeapi.co/api/v2/pokemon/ditto`, {
    //   headers: { 
    //   'Access-Control-Allow-Origin' : '*',
    //   },
    // responseType: 'json',
    //  })
    axios.get(` https://pokeapi.co/api/v2/pokemon/${this.state.userName}`)
      .then(resp => {
        console.log(resp);
        this.props.onSubmit(resp.data);
      });
  };

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className="pokemon-search-bar">
            <form onSubmit={this.handleSubmit}>
              <Input type="text"
                onChange={(event) => this.setState({ userName: event.target.value })}
                placeholder="Pokemon Name" />
              <Button type="submit" variant="contained">Add Pokemon</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

    )
  };
};



const PokemonCard = (props) => {


  const data = {
    labels: mapAbilities(props.stats),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: mapStatValues(props.stats)
      }
    ]
  }

  return (
    <div>
      <Grid item xs={12} >
        <Card>
          <CardHeader
            title={capitalize(props.name)}
            subheader={capitalize(props.types[0].type.name)}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className="cardHeader"
          />
          <CardContent >
            <Typography variant="subtitle1" align="center">
              {props.name}
            </Typography>
            <img width="75px" src={props.sprites.front_default} alt="sprite front" />
            <img width="75px" src={props.sprites.back_default} alt="sprite back" />
            <img width="75px" src={props.sprites.front_shiny} alt="sprite front shiny" />
            <Typography align="center">Weight: {props.weight}</Typography>
            <Radar data={data} />
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained" color="primary">
              Stats
                  </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      <Grid container spacing={40} alignItems="center" alignContent="center"  className="card-list">
        {props.cards.map(card => <PokemonCard {...card} />)}
      </Grid>
    </div>
  );
};

class PokemonGenerator extends React.Component {
  state = { cards: [] };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
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

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const mapAbilities = (array) => {

  var statLabels = [];
  array.forEach(element => {
    statLabels.push(element.stat.name);
  });

  return statLabels;
};

const mapStatValues = (array) => {

  var statValues = [];
  array.forEach(element => {
    statValues.push(element.base_stat);
  });

  return statValues;
};

export default PokemonGenerator;
