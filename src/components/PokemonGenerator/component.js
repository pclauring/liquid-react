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
import {Bar} from 'react-chartjs-2';
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
          <Paper className="pokemon-search-bar"><form onSubmit={this.handleSubmit}>
            <Input type="text"
              onChange={(event) => this.setState({ userName: event.target.value })}
              placeholder="Pokemon Name" />
            <Button type="submit" variant="contained">Add Pokemon</Button>
          </form></Paper>
        </Grid>
      </Grid>

    )
  };
};



const PokemonCard = (props) => {

  const data= {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
    label: "Test Data Set",
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    }]
  }

  return (
    <div>
      <Grid container spacing={40} alignItems="flex-start" alignContent="center">
        <Grid item xs={12} sm={6} md={4} >
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
              <Bar data={data}/>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="contained" color="primary">
                Stats
                  </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <PokemonCard {...card} />)}
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

export default PokemonGenerator;
