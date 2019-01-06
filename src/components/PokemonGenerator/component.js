import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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
      <form onSubmit={this.handleSubmit}>
        <Input type="text"
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Pokemon Name" />
        <Button type="submit">Add Pokemon</Button>
      </form>
    )
  };
};

const Card = (props) => {
	return (
  	<div>
  	  <img width ="75" src={props.sprites.front_default} alt={props.name} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div  style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
      <div>{props.weight}</div>
      </div>
  	</div>
  );
};

const CardList = (props) => {
  return (
  	<div>
			{props.cards.map(card => <Card {...card} />)}
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
export default PokemonGenerator;
