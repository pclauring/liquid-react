import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import  './PokemonType.css';
import fireIcon from '../../assets/fire.png';
import bugIcon from '../../assets/bug.png';
import darkIcon from '../../assets/dark.png';
import normalIcon from '../../assets/normal.png';
import fairyIcon from '../../assets/fairy.png';
import psychicIcon from '../../assets/psychic.png';
import grassIcon from '../../assets/grass.png';
import dragonIcon from '../../assets/dragon.png';
import iceIcon from '../../assets/ice.png';
import fightingIcon from '../../assets/fighting.png';
import groundIcon from '../../assets/ground.png';
import waterIcon from '../../assets/water.png';
import steelIcon from '../../assets/steel.png';
import ghostIcon from '../../assets/ghost.png';
import electricIcon from '../../assets/electric.png';
import rockIcon from '../../assets/rock.png';
import flyingIcon from '../../assets/flying.png';
import poisonIcon from '../../assets/poison.png';


function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}


class PokemonType extends Component {

  getType = () => {
    if (this.props.type === 'FIRE') { return fireIcon; }
    else if (this.props.type === 'DARK') { return darkIcon; }
    else if (this.props.type === 'FAIRY') { return fairyIcon; }
    else if (this.props.type === 'ICE') { return iceIcon; }
    else if (this.props.type === 'ROCK') { return rockIcon; }
    else if (this.props.type === 'FIGHTING') { return fightingIcon; }
    else if (this.props.type === 'ROCK') { return rockIcon; }
    else if (this.props.type === 'GROUND') { return groundIcon; }
    else if (this.props.type === 'POISON') { return poisonIcon; }
    else if (this.props.type === 'DRAGON') { return dragonIcon; }
    else if (this.props.type === 'GRASS') { return grassIcon; }
    else if (this.props.type === 'WATER') { return waterIcon; }
    else if (this.props.type === 'NORMAL') { return normalIcon; }
    else if (this.props.type === 'FLYING') { return flyingIcon; }
    else if (this.props.type === 'PSYCHIC') { return psychicIcon; }
    else if (this.props.type === 'BUG') { return bugIcon; }
    else if (this.props.type === 'STEEL') { return steelIcon; }
    else if (this.props.type === 'ELECTRIC') { return electricIcon; }
    else if (this.props.type === 'GHOST') { return ghostIcon; }
  }

  render() {
    return (
      <div className="Pokemon-type-section">
        <Grid item xs={6} className="pokemon-type-grid-item">
          <Chip
            avatar={<Avatar alt={this.props.type + ' icon'} src={this.getType()} />}
            label={this.props.type}
            onClick={handleClick}
            className="pokemon-type-chip"
          />
        </Grid>
      </div>);
  }
}

export default PokemonType;
