import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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

const getTypeColors = (type) => {
  if (type === 'FIRE') { return { color: orange[50], secondaryColor: orange[200] }; }
  else if (type === 'DARK') { return { color: grey[300], secondaryColor: grey[500] }; }
  else if (type === 'FAIRY') { return { color: pink[50], secondaryColor: pink[300] }; }
  else if (type === 'ICE') { return { color: lightBlue[50], secondaryColor: lightBlue[200] }; }
  else if (type === 'ROCK') { return { color: brown[100], secondaryColor: brown[300] }; }
  else if (type === 'FIGHTING') { return { color: deepOrange[100], secondaryColor: deepOrange[300] }; }
  else if (type === 'GROUND') { return { color: orange[100], secondaryColor: orange[300] }; }
  else if (type === 'POISON') { return { color: purple[100], secondaryColor: purple[300] }; }
  else if (type === 'DRAGON') { return { color: indigo[100], secondaryColor: indigo[300] }; }
  else if (type === 'GRASS') { return { color: green[50], secondaryColor: green[200] }; }
  else if (type === 'WATER') { return { color: blue[50], secondaryColor: blue[200] }; }
  else if (type === 'NORMAL') { return { color: grey[50], secondaryColor: grey[200] }; }
  else if (type === 'FLYING') { return { color: indigo[50], secondaryColor: indigo[200] }; }
  else if (type === 'PSYCHIC') { return { color: purple[50], secondaryColor: purple[200] }; }
  else if (type === 'BUG') { return { color: lime[50], secondaryColor: lime[200] }; }
  else if (type === 'STEEL') { return { color: blueGrey[50], secondaryColor: blueGrey[200] }; }
  else if (type === 'ELECTRIC') { return { color: yellow[50], secondaryColor: yellow[200] }; }
  else if (type === 'GHOST') { return { color: deepPurple[50], secondaryColor: deepPurple[200] }; }
}

const getTypeAttackEffectiveness = (type) => {
  if (type === 'FIRE') { return { bonusDamage: ['GRASS','BUG', 'STEEL', 'ICE'], halfDamage: ['ROCK', 'FIRE', 'WATER', 'DRAGON'], noEffect: [] }; }
  else if (type === 'DARK') { return { bonusDamage: ['PSYCHIC','GHOST'], halfDamage: ['FIGHTING','DARK','FAIRY'], noEffect: []  }; }
  else if (type === 'FAIRY') { return {bonusDamage: ['FIGHTING','DRAGON','DARK'], halfDamage: ['POISON','STEEL','FIRE'], noEffect: []}; }
  else if (type === 'ICE') { return {  bonusDamage: ['FLYING','GROUND','GRASS','DRAGON'], halfDamage: ['STEEL','FIRE','WATER','ICE'], noEffect: []  }; }
  else if (type === 'ROCK') { return { bonusDamage: ['FLYING','BUG','FIRE','ICE'], halfDamage: ['FIGHTING','GROUND', 'STEEL'], noEffect: []  }; }
  else if (type === 'FIGHTING') { return { bonusDamage: ['NORMAL','ROCK','ICE','STEEL','DARK'], halfDamage: ['FLYING','POISON','FAIRY','PSYCHIC','BUG'], noEffect: ['GHOST']  }; }
  else if (type === 'GROUND') { return {  bonusDamage: ['POISIN','ROCK','STEEL','FIRE','ELECTRIC'], halfDamage: ['BUG','GRASS'], noEffect: ['FLYING']  }; }
  else if (type === 'POISON') { return { bonusDamage: ['GRASS','FAIRY'], halfDamage: ['POISON','GROUND','ROCK','GHOST'], noEffect: ['STEEL'] }; }
  else if (type === 'DRAGON') { return { bonusDamage: ['DRAGON'], halfDamage: ['STEEL'], noEffect: ['FAIRY'] }; }
  else if (type === 'GRASS') { return { bonusDamage: ['GROUND','ROCK','WATER'], halfDamage: ['FLYING','POISON','BUG','STEEL','FIRE','GRASS','DRAGON'], noEffect: ['GHOST']  }; }
  else if (type === 'WATER') { return { bonusDamage: ['ROCK','GROUND','FIRE'], halfDamage: ['WATER','GRASS','DRAGON'], noEffect: []}; }
  else if (type === 'NORMAL') { return { bonusDamage: [], halfDamage: ['ROCK', 'STEEL'], noEffect: ['GHOST']  }; }
  else if (type === 'FLYING') { return { bonusDamage: ['FLYING','BUG','GRASS'], halfDamage: ['ROCK', 'STEEL','ELECTRIC'], noEffect: []  }; }
  else if (type === 'PSYCHIC') { return { bonusDamage: ['FIGHTING','POISON'], halfDamage: ['STEEL','PSYCHIC'], noEffect: ['DARK'] }; }
  else if (type === 'BUG') { return { bonusDamage: ['GRASS','PSYCHIC','DARK'], halfDamage: ['FIGHTING','FLYING','POISON','GHOST','STEEL','FIRE','FAIRY'], noEffect: []  }; }
  else if (type === 'STEEL') { return {  bonusDamage: ['ROCK','ICE','FAIRY'], halfDamage: ['STEEL','FIRE','WATER','ELECTRIC'], noEffect: [] }; }
  else if (type === 'ELECTRIC') { return {  bonusDamage: ['FLYING','WATER'], halfDamage: ['GRASS','ELECTRIC','DRAGON'], noEffect: ['GROUND']}; }
  else if (type === 'GHOST') { return { bonusDamage: ['GHOST','PSYCHIC'], halfDamage: ['DARK'], noEffect: ['NORMAL']  }; }
}

class TypeEffectivenessSection extends Component {
  state = {
    typeEffectiveness: getTypeAttackEffectiveness(this.props.type)
  }
  render() {
    return (<div className="TypeEffectivenessSection">
    <Typography variant="title" gutterBottom>Double Damage</Typography>
      {this.state.typeEffectiveness.bonusDamage &&
       this.state.typeEffectiveness.bonusDamage.map(element => 
      <Typography>{element}</Typography>)}
      <Typography variant="title" gutterBottom>Half Damage</Typography>
     {this.state.typeEffectiveness.halfDamage &&
       this.state.typeEffectiveness.halfDamage.map(element => 
      <Typography>{element}</Typography>)}
    <Typography variant="title" gutterBottom>No Damage</Typography>
    { this.state.typeEffectiveness.noEffect &&
      this.state.typeEffectiveness.noEffect.map(element => 
      <Typography>{element}</Typography>)}
      </div>
      );
  }
}

export default TypeEffectivenessSection;
