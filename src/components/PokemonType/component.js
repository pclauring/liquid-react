import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import fire from '../../assets/bug.png';

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class PokemonType extends Component {
  render() {
    return (
      <div className="Pokemon-type-section">
        <Chip
          avatar={<Avatar alt={this.props.type + ' icon'} src={fire} />}
          label={this.props.type}
          onClick={handleClick}
          className="pokemon-type-chip"
        /></div>);
  }
}

export default PokemonType;
