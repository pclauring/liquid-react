import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import TypeEffectivenessSection from '../TypeEffectivenessSection/component';
import './PokemonType.css';
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


class PokemonType extends Component {

  getType = () => {
    if (this.props.type === 'FIRE') { return { icon: fireIcon, chipColor: orange[50] }; }
    else if (this.props.type === 'DARK') { return { icon: darkIcon, chipColor: grey[300] }; }
    else if (this.props.type === 'FAIRY') { return { icon: fairyIcon, chipColor: pink[50] }; }
    else if (this.props.type === 'ICE') { return { icon: iceIcon, chipColor: lightBlue[50] }; }
    else if (this.props.type === 'ROCK') { return { icon: rockIcon, chipColor: brown[100] }; }
    else if (this.props.type === 'FIGHTING') { return { icon: fightingIcon, chipColor: deepOrange[100] }; }
    else if (this.props.type === 'GROUND') { return { icon: groundIcon, chipColor: orange[100] }; }
    else if (this.props.type === 'POISON') { return { icon: poisonIcon, chipColor: purple[100] }; }
    else if (this.props.type === 'DRAGON') { return { icon: dragonIcon, chipColor: indigo[100] }; }
    else if (this.props.type === 'GRASS') { return { icon: grassIcon, chipColor: green[50] }; }
    else if (this.props.type === 'WATER') { return { icon: waterIcon, chipColor: blue[50] }; }
    else if (this.props.type === 'NORMAL') { return { icon: normalIcon, chipColor: grey[50] }; }
    else if (this.props.type === 'FLYING') { return { icon: flyingIcon, chipColor: indigo[50] }; }
    else if (this.props.type === 'PSYCHIC') { return { icon: psychicIcon, chipColor: purple[50] }; }
    else if (this.props.type === 'BUG') { return { icon: bugIcon, chipColor: lime[50] }; }
    else if (this.props.type === 'STEEL') { return { icon: steelIcon, chipColor: blueGrey[50] }; }
    else if (this.props.type === 'ELECTRIC') { return { icon: electricIcon, chipColor: yellow[50] }; }
    else if (this.props.type === 'GHOST') { return { icon: ghostIcon, chipColor: deepPurple[50] }; }
  }

  state = {
    anchorEl: null,
    typeStyle: this.getType()
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="Pokemon-type-section">
        <Grid item xs={6} className="pokemon-type-grid-item">
          <Chip
            avatar={<Avatar alt={this.props.type + ' icon'} src={this.state.typeStyle.icon} />}
            label={this.props.type}
            className="pokemon-type-chip"
            style={{ backgroundColor: this.state.typeStyle.chipColor }}
            aria-owns={open ? 'simple-popper' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          />
          <div>
            <Popover
              id="simple-popper"
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <TypeEffectivenessSection type={this.props.type} />
            </Popover>
          </div>
        </Grid>
      </div>);
  }
}

export default PokemonType;
