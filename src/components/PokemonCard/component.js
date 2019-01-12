import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { Radar } from 'react-chartjs-2';
import './PokemonCard.css';



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

class PokemonCard extends Component {

  state = {
    labels: mapAbilities(this.props.stats),
    datasets: [
      {
        label: 'Statistics',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: mapStatValues(this.props.stats)
      }
    ]
  }

  render() {
    return (
      <div>
        <Grid item xs={12} >
          <Card>
            <CardHeader
              title={capitalize(this.props.name)}
              subheader={capitalize(this.props.types[0].type.name)}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              className="cardHeader"
            />
            <CardContent >
              {this.props.types.map(element => (
                <Typography key={element.type.name} variant="subtitle1" color="textSecondary" align="center">
                  {element.type.name.toUpperCase()}
                </Typography>
              ))}
              <div className="sprite-container">
                <img width="75px" src={this.props.sprites.front_default} alt="sprite front" className="sprite-img" />
                <img width="75px" src={this.props.sprites.back_default} alt="sprite back" className="sprite-img" />
                <img width="75px" src={this.props.sprites.front_shiny} alt="sprite front shiny" className="sprite-img" />
                <img width="75px" src={this.props.sprites.back_shiny} alt="sprite back shiny" className="sprite-img"  />
              </div>
              <Typography align="center">Weight: {this.props.weight}</Typography>
              <Radar data={this.state} />
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
  }
};


export default PokemonCard;
